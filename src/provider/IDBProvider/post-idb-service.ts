import { OptionalKeys } from "@src/types";
import { Post } from "../APIServiceProvider/post/post-model";
import { AbstractIDBService } from "./abstract-idb-service";

export class PostIDBService extends AbstractIDBService<Post> {
  constructor(
    args: OptionalKeys<
      ConstructorParameters<typeof AbstractIDBService<Post>>[0],
      "storeName"
    >,
  ) {
    args.storeName = "posts";
    super(args as ConstructorParameters<typeof AbstractIDBService<Post>>[0]);
  }
}
