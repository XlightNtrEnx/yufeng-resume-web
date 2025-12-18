import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { Career } from "./career-model";

export class CareerService extends AbstractService<Career> {
  public collectionName = "careers";
  public partitionColumns: (keyof Career)[] = ["preview_id"];
}
