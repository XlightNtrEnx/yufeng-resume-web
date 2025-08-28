import ReactMarkdown from "react-markdown";

import { TextBlock } from "@src/common/component/text-block";

export interface MarkDownProps
  extends Pick<
    React.ComponentProps<typeof ReactMarkdown>,
    "remarkPlugins" | "children" | "components"
  > {}

export const MarkDown = (props: MarkDownProps) => {
  return (
    <TextBlock>
      <ReactMarkdown {...props} />
    </TextBlock>
  );
};
