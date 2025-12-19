import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";

export class Post extends AbstractModel {
  body: string;
  urls?: string[];
  medias?: string[];
  name: string;
  related_post_ids?: string[];
  related_post_preview_ids?: string[];
  preview_id: string;
}
