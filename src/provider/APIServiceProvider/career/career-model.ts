import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";

export class Career extends AbstractModel {
  description: string;
  urls?: string[];
  medias?: string[];
  name: string;
  project_ids?: string[];
  project_preview_ids?: string[];
  preview_id: string;
}
