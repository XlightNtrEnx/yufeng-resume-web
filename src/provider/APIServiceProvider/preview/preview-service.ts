import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { Preview } from "./preview-model";
import { OptionalKeys } from "@src/types";

export class PreviewService extends AbstractService<Preview> {
  constructor(
    args: OptionalKeys<
      ConstructorParameters<typeof AbstractService<Preview>>[0],
      "collectionName" | "partitionColumns"
    >
  ) {
    args.collectionName = "previews2";
    args.partitionColumns = ["type"];
    super(args as ConstructorParameters<typeof AbstractService<Preview>>[0]);
  }
}
