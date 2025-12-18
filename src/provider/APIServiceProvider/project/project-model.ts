import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";

export class Project extends AbstractModel {
  description: string;
  urls?: string[];
  medias: string[];
  name: string;
  achievement_ids?: string[];
  achievement_preview_ids?: string[];
  preview_id: string;
}
