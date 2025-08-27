// src/react-markdown.d.ts

import "react-markdown";
import type { IntermediateProps } from "@src/common/components/MarkDown/plugins/remark/onclickspan";

interface CustomComponents {
  onClickSpan?: (props: IntermediateProps) => JSX.Element;
}

declare module "react-markdown" {
  export interface Components extends CustomComponents {}
}
