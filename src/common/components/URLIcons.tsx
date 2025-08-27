import { ImgIcon } from "@src/common/components/ImgIcon";
import { NewTabLink } from "@src/common/components/NewTabLink";
import {
  ColabSVGIcon,
  DocsSVGIcon,
  OpenInNewTabSVGIcon,
} from "@src/common/svgs";
import { paths } from "@src/router/paths";

export interface URLIconsProps {
  urls: string[];
}

const map: Record<string, () => JSX.Element> = {
  "colab.research.google.com": () => <ColabSVGIcon />,
  "github.com": () => <ImgIcon src={paths.public.iconsDir.gitHub} />,
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
