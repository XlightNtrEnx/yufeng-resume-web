import { visit } from "unist-util-visit";

interface PositionEnd {
  line: number;
  column: number;
  offset: number;
}
interface PositionStart extends PositionEnd {}
interface PositionProperty {
  position?: { end: PositionEnd; start: PositionStart };
}

interface RootNode extends PositionProperty {
  type: "root";
  children: ParagraphNode[];
}

interface ParagraphNode extends PositionProperty {
  type: "paragraph";
  data?: { hName: string };
  children: EndNode[];
}

interface EndNode extends PositionProperty {
  type?: "text" | "link";
  data?: { hName: string };
  value?: string;
}

type Replacer = (match: RegExpExecArray) => EndNode;

type ReplacerPluginArgs = {
  regex: RegExp;
  replacer: Replacer;
};

export class PluginFactory {
  public static textReplacerPlugin({ regex, replacer }: ReplacerPluginArgs) {
    return () => {
      return (tree: RootNode) => {
        visit(
          tree,
          "paragraph",
          (
            node: ParagraphNode,
            index: number | undefined,
            parent: RootNode | undefined
          ) => {
            const newChildren = node.children.map((child, index, children) => {
              if (child.type === "text") {
                const text = child.value;
                if (text) {
                  const matches = text.matchAll(regex);
                  const newChild: EndNode[] = [];
                  let processedLength = 0;
                  for (const match of matches) {
                    if (processedLength < match.index) {
                      newChild.push({
                        value: text.slice(processedLength, match.index),
                      });
                    }
                    newChild.push(replacer(match));
                    processedLength = match.index + match[0].length;
                  }
                  if (processedLength < text.length) {
                    newChild.push({
                      value: text.slice(processedLength, text.length),
                    });
                  }
                  return newChild;
                }
              }
              return [child];
            });
            node.children = newChildren.flat();
          }
        );
      };
    };
  }
}
