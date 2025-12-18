import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { Achievement } from "./achievement-model";

export class AchievementService extends AbstractService<Achievement> {
  public collectionName = "achievements2";
  public partitionColumns: (keyof Achievement)[] = ["preview_id"];
}
