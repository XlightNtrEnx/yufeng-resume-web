import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { Post } from "./post-model";

export class PostService extends AbstractService<Post> {
  public collectionName = "posts";
  public partitionColumns: (keyof Post)[] = ["preview_id"];
}
