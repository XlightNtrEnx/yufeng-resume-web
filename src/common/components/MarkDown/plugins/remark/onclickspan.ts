import { OnClickSpanProps } from "@src/common/components/text-block";
import { PluginFactory } from "@src/common/components/MarkDown/custom-plugin";

export const hName = "onClickSpan";

export const onClickSpanPlugin = PluginFactory.replacerPlugin({
  regex: /{.*}\(ocs.*\)/g,
  // value is missing but it works
  replacer: (match: RegExpExecArray) => {
    const [text, skip] = match[0].slice(1, -1).split("}(ocs");
    const hProperties: IntermediateProps = {
      text,
      skip: Number.parseInt(skip),
    };
    const output = {
      data: {
        hName,
        hProperties,
      },
    };
    return output;
  },
});

export interface IntermediateProps extends Pick<OnClickSpanProps, "text"> {
  skip: number;
}
