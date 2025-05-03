import {
  DownloadLink,
  ImgIcon,
  ImgIconProps,
  DownloadLinkProps,
} from "@src/components";
import DownloadIcon from "@src/assets/icons/download512.png";
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
        src={DownloadIcon}
        alt="download-icon"
        $iconSize={iconSize || "0.75em"}
      />
    </DownloadLink>
  );
};
