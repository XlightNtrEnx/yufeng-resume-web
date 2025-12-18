import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";

export enum PreviewType {
  Project = "PROJECT",
  Achievement = "ACHIEVEMENT",
  Career = "CAREER",
}

export class Preview extends AbstractModel {
  name: string;
  type: PreviewType;
  image_url: string;
}
