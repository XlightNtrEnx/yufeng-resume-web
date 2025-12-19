import { useContext } from "react";

import { MarkDown } from "@src/common/component/MarkDown/MarkDown";
import {
  IntermediateProps,
  onClickSpanPlugin,
  hName,
} from "@src/common/component/MarkDown/plugins/remark/onclickspan";
import { OnClickSpan } from "@src/common/component/text-block";
import { AchievementContext } from "./Achievement";
import { Components } from "react-markdown/lib";

interface Props {
  description: string;
}

export const Description = ({ description }: Props) => {
  const setSkip = useContext(AchievementContext);
  const components: Components = {};
  (components as any)[hName] = (props: IntermediateProps) => {
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
