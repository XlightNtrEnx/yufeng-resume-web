import { OptionalKeys } from "@src/types";
import { AbstractModel } from "../abstract-model";

export type NewModel<M extends AbstractModel> = OptionalKeys<
  M,
  "id" | "created_at" | "updated_at"
>;

export type Body<M extends AbstractModel> = {
  insertOne?: InsertOne<M>;
  insertMany?: InsertMany<M>;
  updateOne?: UpdateOne<M>;
  find?: Find<M>;
  findOne?: Find<M>;
  options?: BodyOptions;
};
export type InsertOne<M extends AbstractModel> = {
  document: NewModel<M>;
};
export type InsertMany<M extends AbstractModel> = {
  documents: NewModel<M>[];
};
export type UpdateOne<M extends AbstractModel> = {
  filter: Filter<M>;
  update: { $set?: Partial<M>; $unset?: { [K in keyof M]?: "" } };
};
export type Find<M extends AbstractModel> = {
  filter?: Filter<M>;
  sort?: Sort<M>;
  options?: { pageState?: string };
};
export type Filter<M extends AbstractModel> = {
  [K in keyof M]?: {
    $eq?: M[K];
    $in?: M[K][];
    $gt?: M[K];
  };
};
export type Sort<M> = { [K in keyof M]?: number };
export type BodyOptions = {
  limit?: number;
};
