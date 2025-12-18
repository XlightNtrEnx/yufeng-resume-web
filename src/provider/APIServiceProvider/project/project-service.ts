import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { Project } from "./project-model";

export class ProjectService extends AbstractService<Project> {
  public collectionName = "projects2";
  public partitionColumns: (keyof Project)[] = ["preview_id"];
}
