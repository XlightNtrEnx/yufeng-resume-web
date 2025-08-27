import { useContext } from "react";

import { MarkDown } from "@src/common/components/MarkDown/MarkDown";
import {
  IntermediateProps,
  onClickSpanPlugin,
  hName,
} from "@src/common/components/MarkDown/plugins/remark/onclickspan";
import { OnClickSpan } from "./OnClickSpan";
import { ProjectContext } from "./Project";
import { Components } from "react-markdown/lib";

export const Description = ({ description }: { description: string }) => {
  const setSkip = useContext(ProjectContext);
  const components: Components = {};
  components[hName] = (props: IntermediateProps) => {
    const skip = props.skip;
    const text = props.text;
    return <OnClickSpan text={text} onClick={() => setSkip([skip])} />;
  };
  return (
    <MarkDown remarkPlugins={[onClickSpanPlugin]} components={components}>
      {description}
    </MarkDown>
  );
};
