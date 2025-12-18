import { isoDateStrToDateReplacer } from "@src/common/util/json-parse-replacers";
import { LocalStoragePrefix } from "@src/common/util/local-storage";
import { LRUCache } from "@src/common/util/lru-cache";
import { OptionalKeys } from "@src/types";
import { v4 as uuidv4 } from "uuid";
import { AbstractModel } from "./abstract-model";

type NewModel<M extends AbstractModel> = OptionalKeys<
  M,
  "id" | "created_at" | "updated_at"
>;

type Body<M extends AbstractModel> = {
  insertOne?: InsertOne<M>;
  insertMany?: InsertMany<M>;
  updateOne?: UpdateOne<M>;
  find?: Find<M>;
  findOne?: Find<M>;
  options?: BodyOptions;
};
type InsertOne<M extends AbstractModel> = {
  document: NewModel<M>;
};
type InsertMany<M extends AbstractModel> = {
  documents: NewModel<M>[];
};
type UpdateOne<M extends AbstractModel> = {
  filter: Filter<M>;
  update: { $set?: Partial<M>; $unset?: { [K in keyof M]?: "" } };
};
type Find<M extends AbstractModel> = {
  filter: Filter<M>;
  sort?: Sort<M>;
};
type Filter<M extends AbstractModel> = {
  [K in keyof M]?: {
    $eq?: M[K];
    $in?: M[K][];
    $gt?: M[K];
  };
};
type Sort<M> = { [K in keyof M]?: number };
type BodyOptions = {
  limit?: number;
};

export abstract class AbstractService<
  M extends AbstractModel,
  N extends NewModel<M> = NewModel<M>
> {
  public abstract collectionName: string;
  public abstract partitionColumns: (keyof M)[];
  public localStorageKeyPrefix: string = LocalStoragePrefix.CassandraModels;
  public keyspace: string = "default_keyspace";
  public baseURL: string;

  private latest_models_cache = new LRUCache<string, M[]>({
    capacity: 10,
    ttlMS: 28800000, // 8 hours
  });

  constructor({ baseURL }: { baseURL: string }) {
    this.baseURL = baseURL;
  }

  public async findAllModelsAndSync() {
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
    for (const [partitionPath, models] of Object.entries(modelsByPartition)) {
      this.appendDbModelsToLocalStoragePartition({
        partitionPath,
        models,
        from: 0,
      });
    }
  }

  public async getPartition(partitions: Partial<M>) {
    const partitionPath = this.getPartitionPath(partitions);

    // Check cache
    const cacheModels = this.latest_models_cache.get(partitionPath);
    if (cacheModels !== null) return cacheModels;

    // Check localStorage
    const lsLastSync = new Date(
      localStorage.getItem(this.getLocalStorageLastSyncKey(partitionPath)) ?? ""
    );
    if (!isNaN(lsLastSync.getTime())) {
      const lsModels = this.getModelsOfLocalStoragePartition(partitionPath);
      const elapsedMS = Date.now() - lsLastSync.getTime();
      if (elapsedMS < 28800000) {
        // 8 hours
        return lsModels;
      }
      const elapsedHours = elapsedMS / 3600000;
      const elapsedDays = elapsedHours / 24;
      // if (elapsedDays >= 0) {
      this.deleteLocalStoragePartition(partitionPath);
      // }
    }

    // Check db
    const partitionFilter = this.getFilter(partitions);
    const dbModels = await this.syncDbPartitionToLocalStorageAndCache({
      partitionFilter,
      partitionPath,
    });
    return dbModels;
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
    await this.fetchAPI({ body: { updateOne } });
  }

  public async findOne(findOne: Find<M>, options?: BodyOptions) {
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
    const responseJSON = await this.fetchAPI({
      body: { find, options },
    });

    if (responseJSON.data) {
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
    newModel.id = uuidv4();
    const date = new Date();
    newModel.created_at = date;
    newModel.updated_at = date;
    await this.fetchAPI({
      body: { insertOne: { document: newModel } },
    });
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

  private getFilter(partitions: Partial<M>) {
    const filter: Filter<M> = {};
    for (const partitionCol of this.partitionColumns) {
      const partitionVal = partitions[partitionCol];
      if (!partitionVal) throw new Error();
      filter[partitionCol] = { $eq: partitionVal };
    }
    return filter;
  }

  private getLocalStorageModelsKey(partitionPath: string, modelIdx: number) {
    return `${this.localStorageKeyPrefix}/${this.keyspace}/${this.collectionName}/${partitionPath}/models/${modelIdx}`;
  }

  private getLocalStorageEarliestKey(partitionPath: string) {
    return `${this.localStorageKeyPrefix}/${this.keyspace}/${this.collectionName}/${partitionPath}/models/metadata/earliest`;
  }

  private getLocalStorageLatestKey(partitionPath: string) {
    return `${this.localStorageKeyPrefix}/${this.keyspace}/${this.collectionName}/${partitionPath}/models/metadata/latest`;
  }

  private getLocalStorageLastSyncKey(partitionPath: string) {
    return `${this.localStorageKeyPrefix}/${this.keyspace}/${this.collectionName}/${partitionPath}/models/metadata/last-sync`;
  }

  private getMetadataOfLocalStorage(partitionPath: string) {
    const earliest = localStorage.getItem(
      this.getLocalStorageEarliestKey(partitionPath)
    );
    const latest = localStorage.getItem(
      this.getLocalStorageLatestKey(partitionPath)
    );
    const lastSync = localStorage.getItem(
      this.getLocalStorageLastSyncKey(partitionPath)
    );
    if (earliest && latest && lastSync)
      return {
        earliest: parseInt(earliest),
        latest: parseInt(latest),
        lastSync: new Date(lastSync),
      };
    return null;
  }

  private deleteLocalStoragePartition(partitionPath: string) {
    const metadata = this.getMetadataOfLocalStorage(partitionPath);
    if (metadata) {
      for (let i = metadata.earliest; i <= metadata.latest; i++)
        localStorage.removeItem(
          this.getLocalStorageModelsKey(partitionPath, i)
        );
    }
    localStorage.removeItem(this.getLocalStorageEarliestKey(partitionPath));
    localStorage.removeItem(this.getLocalStorageLatestKey(partitionPath));
    localStorage.removeItem(this.getLocalStorageLastSyncKey(partitionPath));
  }

  private getModelsAndMetadataOfLocalStoragePartition(partitionPath: string) {
    const metadata = this.getMetadataOfLocalStorage(partitionPath);
    if (metadata) {
      const models: M[] = [];
      for (let i = metadata.earliest; i <= metadata.latest; i++) {
        models.push(
          JSON.parse(
            localStorage.getItem(
              this.getLocalStorageModelsKey(partitionPath, i)
            ) as string,
            isoDateStrToDateReplacer
          ) as M
        );
      }
      return { metadata, models };
    }
    return null;
  }

  private getModelsOfLocalStoragePartition(partitionPath: string) {
    // Get metadata first
    const earliest = localStorage.getItem(
      this.getLocalStorageEarliestKey(partitionPath)
    );
    const latest = localStorage.getItem(
      this.getLocalStorageLatestKey(partitionPath)
    );
    if (!latest || !earliest) return [];

    // Use metadata retrieve models
    const earliestInt = parseInt(earliest);
    const latestInt = parseInt(latest);
    const models: M[] = [];
    for (let i = earliestInt; i <= latestInt; i++)
      models.push(
        JSON.parse(
          localStorage.getItem(
            this.getLocalStorageModelsKey(partitionPath, i)
          ) as string,
          isoDateStrToDateReplacer
        ) as M
      );
    return models;
  }

  private appendDbModelsToLocalStoragePartition({
    partitionPath,
    models,
    from,
  }: {
    partitionPath: string;
    models: M[];
    from: number;
  }) {
    let i = from;
    if (models.length > 0) {
      for (const model of models)
        localStorage.setItem(
          this.getLocalStorageModelsKey(partitionPath, i++),
          JSON.stringify(model)
        );
      localStorage.setItem(this.getLocalStorageEarliestKey(partitionPath), "0");
      localStorage.setItem(
        this.getLocalStorageLatestKey(partitionPath),
        String(i - 1)
      );
    }
    localStorage.setItem(
      this.getLocalStorageLastSyncKey(partitionPath),
      new Date().toISOString()
    );
  }

  private async syncDbPartitionToLocalStorageAndCache({
    partitionFilter,
    partitionPath,
  }: {
    partitionFilter: Filter<M>;
    partitionPath: string;
  }) {
    // Fetch the latest model
    const latestDbModel = await this.findOne({
      filter: partitionFilter,
      sort: { created_at: -1 },
    });

    // Decide to sync or purge based on presence of latest model in db
    if (!latestDbModel) {
      // Purge partition from localStorage
      this.deleteLocalStoragePartition(partitionPath);
      this.latest_models_cache.delete(partitionPath);
      return [];
    } else {
      // Start syncing db to localStorage and cache
      const results =
        this.getModelsAndMetadataOfLocalStoragePartition(partitionPath);
      if (results && results.models.length > 0) {
        // localStorage is present with the earliest db model so sync by fetching models later than latestLSModel
        const lsModels = results.models;
        const laterDbModels = await this.find({
          filter: {
            ...partitionFilter,
            created_at: { $gt: lsModels[lsModels.length - 1].created_at },
          },
          sort: { created_at: 1 },
        });
        this.appendDbModelsToLocalStoragePartition({
          partitionPath,
          models: laterDbModels,
          from: results.metadata.latest + 1,
        });
        for (const laterDbModel of laterDbModels) lsModels.push(laterDbModel);
        this.latest_models_cache.put(partitionPath, lsModels);
        return lsModels;
      } else {
        // localStorage not present so just write everything
        const dbModels = await this.find({
          filter: partitionFilter,
          sort: { created_at: 1 },
        });
        this.appendDbModelsToLocalStoragePartition({
          partitionPath,
          models: dbModels,
          from: 0,
        });
        this.latest_models_cache.put(partitionPath, dbModels);
        return dbModels;
      }
    }
  }

  private async fetchAPI(
    { body }: { body: Body<M> },
    options?: { url?: string }
  ) {
    const url =
      options && options.url
        ? options.url
        : `${this.baseURL}/api/json/v1/${this.keyspace}/${this.collectionName}`;
    const stringifiedBody = JSON.stringify(body);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringifiedBody,
    });

    if (!response.ok)
      throw new Error(`POST to ${url} return status ${response.status}`);

    const responseJSON = (await response.json()) as {
      data?: {
        documents?: M[]; // find
        document?: M | null; // findOne
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
        responseJSON.data.document.created_at
      );
      responseJSON.data.document.updated_at = new Date(
        responseJSON.data.document.updated_at
      );
    }

    if (responseJSON.errors)
      throw new Error(JSON.stringify(responseJSON.errors));
    return responseJSON;
  }
}
