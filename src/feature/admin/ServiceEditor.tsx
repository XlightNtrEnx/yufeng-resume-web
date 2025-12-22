import { ExpendablePanel } from "@src/common/component/ExpendablePanel";
import { H2 } from "@src/common/element/text";
import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";

type Props = {
  service: AbstractService<any>;
};

export const ServiceEditor = ({ service }: Props) => {
  return (
    <ExpendablePanel headerString={service.collectionName}>
      <H2>Models</H2>
    </ExpendablePanel>
  );
};
