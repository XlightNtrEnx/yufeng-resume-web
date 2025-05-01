import { styled } from "styled-components";

import { A, AProps } from "@src/elements";

const StyledA = styled(A)``;

export interface ExternalLinkProps extends AProps {
  children?: React.ReactNode;
}

/**
 * Link to an external website
 */
export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <StyledA target="_blank" rel="noreferrer noopener" href={href}>
      {children}
    </StyledA>
  );
};
