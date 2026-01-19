import { Post } from "@src/provider/APIServiceProvider/post/post-model";
import { Preview } from "@src/provider/APIServiceProvider/preview/preview-model";
import { DBSchema, IDBPDatabase } from "idb";

export interface CustomDBSchema {
  posts: { key: string; value: Post; indexes: { preview_id: string } };
  previews: { key: string; value: Preview; indexes: { type: string } };
}
export type CustomDBValues = CustomDBSchema[keyof CustomDBSchema]["value"];
export type CustomDBKeys = keyof CustomDBSchema;

export interface CustomDBSchemaExtended extends DBSchema, CustomDBSchema {}

export type CustomIDBPDatabase = IDBPDatabase<CustomDBSchemaExtended>;
