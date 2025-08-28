import { NewTabLink } from "@src/common/component/NewTabLink";
import {
  ColabSVGIcon,
  DocsSVGIcon,
  GitHubSVGIcon,
  OpenInNewTabSVGIcon,
} from "@src/common/svg";

export interface URLIconsProps {
  urls: string[];
}

const map: Record<string, () => JSX.Element> = {
  "colab.research.google.com": () => <ColabSVGIcon />,
  "github.com": () => <GitHubSVGIcon />,
  "docs.google.com": () => <DocsSVGIcon />,
};

export const URLIcons = ({ urls: URLs }: URLIconsProps) => {
  return (
    <>
      {URLs.map((value) => {
        const parsedUrl = new URL(value);
        const TargetIcon =
          map[parsedUrl.hostname] || (() => <OpenInNewTabSVGIcon />);
        return (
          <NewTabLink key={value} href={value}>
            <TargetIcon />
          </NewTabLink>
        );
      })}
    </>
  );
};
