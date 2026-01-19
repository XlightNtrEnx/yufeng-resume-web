import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service/abstract-service";
import { Post } from "./post-model";
import { OptionalKeys } from "@src/types";

export class PostService extends AbstractService<Post> {
  public collectionName = "posts";
  public partitionColumns: (keyof Post)[] = ["preview_id"];

  constructor(
    args: OptionalKeys<
      ConstructorParameters<typeof AbstractService<Post>>[0],
      "collectionName" | "partitionColumns" | "clusteringColumns"
    >,
  ) {
    args.collectionName = "posts";
    args.partitionColumns = ["preview_id"];
    args.clusteringColumns = ["created_at", "id"];
    super(args as ConstructorParameters<typeof AbstractService<Post>>[0]);
  }
}
