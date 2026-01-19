import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service/abstract-service";
import { Preview } from "./preview-model";
import { OptionalKeys } from "@src/types";

export class PreviewService extends AbstractService<Preview> {
  constructor(
    args: OptionalKeys<
      ConstructorParameters<typeof AbstractService<Preview>>[0],
      "collectionName" | "partitionColumns" | "clusteringColumns"
    >,
  ) {
    args.collectionName = "previews2";
    args.partitionColumns = ["type"];
    args.clusteringColumns = ["created_at", "id"];
    super(args as ConstructorParameters<typeof AbstractService<Preview>>[0]);
  }
}
