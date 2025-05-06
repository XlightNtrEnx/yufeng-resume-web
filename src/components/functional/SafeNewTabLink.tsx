import { styled } from "styled-components";

import { A, AProps } from "@src/elements";

const StyledA = styled(A)``;

export interface ExternalLinkProps extends AProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Link to an external website
 */
export const SafeNewTabLink = ({
  href,
  children,
  className,
}: ExternalLinkProps) => {
  return (
    <StyledA
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className={className}
    >
      {children}
    </StyledA>
  );
};
