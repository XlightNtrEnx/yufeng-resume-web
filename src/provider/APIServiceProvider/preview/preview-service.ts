import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { Preview } from "./preview-model";

export class PreviewService extends AbstractService<Preview> {
  public collectionName = "previews2";
  public partitionColumns: (keyof Preview)[] = ["type"];
}
