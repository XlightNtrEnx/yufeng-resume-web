import {
  DownloadLink,
  DownloadLinkProps,
} from "@src/common/components/DownloadLink";
import { ImgIcon, ImgIconProps } from "@src/common/components/ImgIcon";
import { paths } from "@src/router/paths";
import { EnsurePropertyExists } from "@src/types";

const src = "src" as const;

export interface DownloadLinkWithIconProps
  extends Omit<EnsurePropertyExists<ImgIconProps, typeof src>, typeof src>,
    DownloadLinkProps {}

/**
 * Link to download a file
 */
export const DownloadLinkWithIcon = ({
  href,
  $iconSize: iconSize,
  children,
}: DownloadLinkWithIconProps) => {
  return (
    <DownloadLink href={href}>
      {children}
      <ImgIcon
        src={paths.public.iconsDir.download}
        alt="download-icon"
        $iconSize={iconSize || "0.75em"}
      />
    </DownloadLink>
  );
};
