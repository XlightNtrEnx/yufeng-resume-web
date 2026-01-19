import { OptionalKeys } from "@src/types";
import { Preview } from "../APIServiceProvider/preview/preview-model";
import { AbstractIDBService } from "./abstract-idb-service";

export class PreviewIDBService extends AbstractIDBService<Preview> {
  constructor(
    args: OptionalKeys<
      ConstructorParameters<typeof AbstractIDBService<Preview>>[0],
      "storeName"
    >,
  ) {
    args.storeName = "previews";
    super(args as ConstructorParameters<typeof AbstractIDBService<Preview>>[0]);
  }
}
