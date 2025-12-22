import { LocalStoragePrefix } from "@src/common/util/local-storage";
import { AbstractModel } from "./abstract-model";

export class LocalService<M extends AbstractModel> {
  prefix: LocalStoragePrefix = LocalStoragePrefix.Models;
  keyspace: string = "default_keyspace";
  collectionName: string;
  partitionColumns: (keyof M)[];

  constructor({
    collectionName,
    partitionColumns,
  }: {
    collectionName: string;
    partitionColumns: (keyof M)[];
  }) {
    this.collectionName = collectionName;
    this.partitionColumns = partitionColumns;
  }

  private getPartitionPath(partition: Partial<M>) {
    const partitionValues: M[keyof M][] = [];
    for (const partitionCol of this.partitionColumns) {
      const partitionVal = partition[partitionCol];
      if (!partitionVal) throw new Error();
      partitionValues.push(partitionVal);
    }
    return partitionValues.join("/");
  }

  private getModelsKey(partitionPath: string, modelIdx: number) {
    return `${this.prefix}/${this.keyspace}/${this.collectionName}/${partitionPath}/models/${modelIdx}`;
  }
}
