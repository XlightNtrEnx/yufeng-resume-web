import { CustomDBKeys, CustomIDBPDatabase, CustomDBValues } from "./db";

export abstract class AbstractIDBService<M extends CustomDBValues> {
  db: CustomIDBPDatabase;
  storeName: CustomDBKeys;

  constructor({
    db,
    storeName,
  }: {
    db: CustomIDBPDatabase;
    storeName: CustomDBKeys;
  }) {
    this.db = db;
    this.storeName = storeName;
  }

  public async getFromIndex<T extends keyof M>({
    key,
    filter,
  }: {
    key: T;
    filter: { $eq: M[T] };
  }) {
    return this.db.getAllFromIndex(
      this.storeName,
      key as never,
      IDBKeyRange.only(filter.$eq),
    );
  }

  public async get({ key }: { key: string }): Promise<M> {
    return this.db.get(this.storeName, key) as Promise<M>;
  }

  public async set({ val }: { val: M }) {
    return this.db.put(this.storeName, val);
  }
  public async del({ key }: { key: string }) {
    return this.db.delete(this.storeName, key);
  }
  public async clear() {
    return this.db.clear(this.storeName);
  }
  public async keys() {
    return this.db.getAllKeys(this.storeName);
  }
}
