import { styled } from "styled-components";

import { A, AProps } from "@src/common/elements/A";

const StyledA = styled(A)``;

export interface ExternalLinkProps extends AProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Link to an external website
 */
export const NewTabLink = ({
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
