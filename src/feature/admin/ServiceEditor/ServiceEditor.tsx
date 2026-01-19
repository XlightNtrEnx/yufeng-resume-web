import { ExpendablePanel } from "@src/common/component/ExpendablePanel";
import { UpdateForm } from "./UpdateForm";

export const ServiceEditor = () => {
  return (
    <ExpendablePanel header={"Service editor"}>
      <UpdateForm />
    </ExpendablePanel>
  );
};
