import { styled } from "styled-components";

import {
  NewTabLink,
  ExternalLinkProps,
} from "@src/common/components/NewTabLink";

const StyledExternalLink = styled(NewTabLink)`
  text-decoration: underline !important;
  color: ${({ theme }) => theme.hyperLinkColor};
`;

/**
 * Link to an external website
 */
export const BlueUnderlineExternalLink = ({
  href,
  children,
}: ExternalLinkProps) => {
  return <StyledExternalLink href={href}>{children}</StyledExternalLink>;
};
