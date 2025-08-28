import {
  DownloadLink,
  DownloadLinkProps,
} from "@src/common/component/DownloadLink";
import { ImgIconProps } from "@src/common/component/ImgIcon";
import { EnsurePropertyExists } from "@src/types";
import styled from "styled-components";
import { FlexRow } from "../layout/flex";
import { Download } from "../svg";

const src = "src" as const;

export interface DownloadLinkWithIconProps
  extends Omit<EnsurePropertyExists<ImgIconProps, typeof src>, typeof src>,
    DownloadLinkProps {}

const StyledFlexRow = styled(FlexRow)`
  align-items: center;
`;

/**
 * Link to download a file
 */
export const DownloadLinkWithIcon = ({
  href,
  children,
}: DownloadLinkWithIconProps) => {
  return (
    <DownloadLink href={href}>
      <StyledFlexRow>
        {children}
        <Download width="1em" height="1em" />
      </StyledFlexRow>
    </DownloadLink>
  );
};
