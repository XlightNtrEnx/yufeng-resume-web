import { LocalStoragePrefix } from "@src/common/util/local-storage";
import { AbstractIDBService } from "@src/provider/IDBProvider/abstract-idb-service";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../post/post-model";
import { Preview } from "../preview/preview-model";
import { Body, BodyOptions, Find, NewModel, UpdateOne } from "./types";

export type AllModels = Post | Preview;
export type ExtractModel<T> = T extends AbstractService<infer U> ? U : never;

export abstract class AbstractService<
  M extends AllModels,
  N extends NewModel<M> = NewModel<M>,
> {
  public collectionName: string;
  public partitionColumns: (keyof M)[];
  public clusteringColumns: (keyof M)[];
  public localStorageKeyPrefix: string = LocalStoragePrefix.Models;
  public keyspace: string = "default_keyspace";
  public baseURL: string;
  public token?: string;

  private idbService: AbstractIDBService<M>;
  private syncingPromise: Promise<void> | null = null;

  constructor({
    baseURL,
    token,
    collectionName,
    partitionColumns,
    clusteringColumns,
    idbService,
  }: {
    baseURL: string;
    token?: string;
    collectionName: string;
    partitionColumns: (keyof M)[];
    clusteringColumns: (keyof M)[];
    idbService: AbstractIDBService<M>;
  }) {
    this.baseURL = baseURL;
    this.token = token;
    this.collectionName = collectionName;
    this.partitionColumns = partitionColumns;
    this.clusteringColumns = clusteringColumns;
    this.idbService = idbService;
  }

  public async findAllModelsByPartition() {
    const dbModels = await this.find({ filter: {} });
    dbModels.sort((a, b) => {
      return a.created_at.getTime() - b.created_at.getTime();
    });
    const modelsByPartition: Record<string, M[]> = {};
    for (const dbModel of dbModels) {
      const partitionPath = this.getPartitionPath(dbModel);
      const partitionedDbModels =
        partitionPath in modelsByPartition
          ? modelsByPartition[partitionPath]
          : [];
      partitionedDbModels.push(dbModel);
      modelsByPartition[partitionPath] = partitionedDbModels;
    }
    return modelsByPartition;
  }

  public async syncIDB() {
    this.startSync();
    const models = await this.find({});
    for (const model of models) {
      await this.idbService.set({
        val: model,
      });
    }
    this.endSync();
  }

  public async getPartition(partitions: Partial<M>) {
    const key = this.partitionColumns[0];
    const value = partitions[key];
    if (value === null || value === undefined) {
      throw new Error();
    }
    if (this.syncingPromise) {
      await this.syncingPromise;
    }
    const idbModels = await this.idbService.getFromIndex({
      key,
      filter: { $eq: value },
    });
    return idbModels as M[];
  }

  public async duplicateTo(collectionName: string) {
    const url = `${this.baseURL}/api/json/v1/${this.keyspace}/${collectionName}`;
    const documents = await this.find({ filter: {} });
    await this.fetchAPI({ body: { insertMany: { documents } } }, { url });
  }

  public async updateOne(updateOne: UpdateOne<M>) {
    if (!updateOne.update.$set) updateOne.update.$set = {};
    updateOne.update.$set.updated_at =
      updateOne.update.$set.updated_at ?? new Date();
    for (const col of this.partitionColumns) {
      updateOne.update.$set[col] = undefined;
    }
    for (const col of this.clusteringColumns) {
      updateOne.update.$set[col] = undefined;
    }
    await this.fetchAPI({ body: { updateOne } });
  }

  public async findOne(findOne: Find<M>, options?: BodyOptions) {
    if (!findOne.filter) findOne.filter = {};
    const responseJSON = await this.fetchAPI({
      body: { findOne, options },
    });

    if (responseJSON.data) {
      return responseJSON.data.document || null;
    } else {
      throw new Error();
    }
  }

  public async find(find: Find<M>, options?: BodyOptions) {
    if (!find.filter) find.filter = {};
    const responseJSON = await this.fetchAPI({
      body: { find, options },
    });

    if (responseJSON.data) {
      if (responseJSON.data.nextPageState) {
        const models: M[][] = [responseJSON.data.documents ?? []];
        let nextPageState: string | null = responseJSON.data.nextPageState;
        while (nextPageState != null) {
          const newFind = {
            ...find,
            options: { pageState: nextPageState },
          };
          const responseJSON = await this.fetchAPI({
            body: { find: newFind, options },
          });
          if (responseJSON.data && responseJSON.data.documents) {
            models.push(responseJSON.data.documents);
            nextPageState = responseJSON.data.nextPageState;
          } else {
            nextPageState = null;
          }
        }
        return models.flat();
      }
      return responseJSON.data.documents ?? [];
    } else {
      throw new Error();
    }
  }

  public async insert(newModels: N[]) {
    const date = new Date();
    for (const newModel of newModels) {
      newModel.id = newModel.id ?? uuidv4();
      newModel.created_at = newModel.created_at ?? date;
      newModel.updated_at = newModel.updated_at ?? date;
    }
    await this.fetchAPI({
      body: { insertMany: { documents: newModels } },
    });
  }

  public async insertOne(newModel: N) {
    newModel.id = newModel.id ? newModel.id : uuidv4();
    const date = new Date();
    newModel.created_at = newModel.created_at ? newModel.created_at : date;
    newModel.updated_at = newModel.updated_at ? newModel.updated_at : date;
    await this.fetchAPI({
      body: { insertOne: { document: newModel } },
    });
  }

  private startSync() {
    this.syncingPromise = new Promise((resolve) => {
      this.finishSync = resolve;
    });
  }

  private finishSync!: () => void;

  private endSync() {
    this.finishSync();
    this.syncingPromise = null;
  }

  private getPartitionPath(partitions: Partial<M>) {
    const partitionValues: M[keyof M][] = [];
    for (const partitionCol of this.partitionColumns) {
      const partitionVal = partitions[partitionCol];
      if (!partitionVal) throw new Error();
      partitionValues.push(partitionVal);
    }
    return partitionValues.join("/");
  }

  private async fetchAPI(
    { body }: { body: Body<M> },
    options?: { url?: string },
  ) {
    const url =
      options && options.url
        ? options.url
        : `${this.baseURL}/api/json/v1/${this.keyspace}/${this.collectionName}`;
    const stringifiedBody = JSON.stringify(body);
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (this.token) headers["Token"] = this.token;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: stringifiedBody,
    });

    if (!response.ok)
      throw new Error(`POST to ${url} return status ${response.status}`);

    const responseJSON = (await response.json()) as {
      data?: {
        documents?: M[]; // find
        document?: M | null; // findOne
        nextPageState: string | null;
      };
      status?: {
        insertedIds?: string[]; // insert or insertOne
        matchedCount?: number; // update or updateOne
        modifiedCount?: number; // update or updateOne
      };
      errors?: { message: string }[];
    };

    if (responseJSON.data?.documents) {
      responseJSON.data.documents.forEach((doc) => {
        doc.created_at = new Date(doc.created_at);
        doc.updated_at = new Date(doc.updated_at);
      });
    }

    if (responseJSON.data?.document) {
      responseJSON.data.document.created_at = new Date(
        responseJSON.data.document.created_at,
      );
      responseJSON.data.document.updated_at = new Date(
        responseJSON.data.document.updated_at,
      );
    }

    if (responseJSON.errors)
      throw new Error(JSON.stringify(responseJSON.errors));
    return responseJSON;
  }
}
