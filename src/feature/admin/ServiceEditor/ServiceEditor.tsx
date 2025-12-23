import { ExpendablePanel } from "@src/common/component/ExpendablePanel";
import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";
import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { UpdateForm } from "./UpdateForm";

type Props<M extends AbstractModel> = {
  service: AbstractService<M>;
};

export const ServiceEditor = <M extends AbstractModel>({
  service,
}: Props<M>) => {
  return (
    <ExpendablePanel header={service.collectionName}>
      <UpdateForm service={service} />
    </ExpendablePanel>
  );
};
