import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";

export class Achievement extends AbstractModel {
  description: string;
  urls?: string[];
  medias?: string[];
  name: string;
  project_id: string;
  project_preview_id: string;
  preview_id: string;
}
