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
  children: TextNode[];
}

interface TextNode extends PositionProperty {
  type?: "text";
  data?: { hName: string };
  value: string;
}

export function customPlugin() {
  return (tree: RootNode) => {
    visit(
      tree,
      "paragraph",
      (
        node: ParagraphNode,
        index: number | undefined,
        parent: RootNode | undefined
      ) => {
        const text = (node.children as TextNode[])[0]?.value || "";
        if (/^::note::/.test(text)) {
          ((parent as RootNode).children as ParagraphNode[])[index as number] =
            {
              type: "paragraph",
              data: {
                hName: "note", // treat it as an HTML element
              },
              children: [
                { type: "text", value: text.replace(/^::note::/, "") },
              ],
            };
        }
      }
    );
  };
}

type Replacer = (match: RegExpExecArray) => TextNode;

type ReplacerPluginArgs = {
  regex: RegExp;
  replacer: Replacer;
};

export class PluginFactory {
  public static replacerPlugin({ regex, replacer }: ReplacerPluginArgs) {
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
            const text = node.children[0].value;
            const matches = text.matchAll(regex);
            const iterator = matches[Symbol.iterator]();
            const firstMatch = iterator.next().value;
            if (firstMatch) {
              const newChildren: TextNode[] = [];
              let processedLength = 0;

              if (firstMatch.index > 0) {
                newChildren.push({
                  value: text.slice(0, firstMatch.index),
                });
              }
              newChildren.push(replacer(firstMatch));

              processedLength = firstMatch.index + firstMatch[0].length;
              for (const match of iterator) {
                if (processedLength < match.index) {
                  newChildren.push({
                    value: text.slice(processedLength, match.index),
                  });
                }
                newChildren.push(replacer(match));
                processedLength = match.index + match[0].length;
              }

              if (processedLength < text.length) {
                newChildren.push({
                  value: text.slice(processedLength, text.length),
                });
              }

              node.children = newChildren;
            }
          }
        );
      };
    };
  }
}
