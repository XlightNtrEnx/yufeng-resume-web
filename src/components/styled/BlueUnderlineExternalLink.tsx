import { styled } from "styled-components";

import { SafeNewTabLink, ExternalLinkProps } from "@src/components";

const StyledExternalLink = styled(SafeNewTabLink)`
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
