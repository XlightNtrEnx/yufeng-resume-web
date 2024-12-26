import { ReactNode } from "react";
import { styled } from "styled-components";

import { A, Span } from "@src/elements";
import { Icon } from "@src/components";

const StyledA = styled(A)`
  text-decoration: none;
  line-height: 1;
`;

interface Props {
  children?: ReactNode;
  href: string;
  text?: string;
  src?: string;
  iconSize?: string;
}

/**
 * Link to an external website
 */
export const ExternalLink = ({
  children,
  href,
  text,
  src,
  iconSize,
}: Props) => {
  return (
    <StyledA target="_blank" rel="noreferrer noopener" href={href}>
      {text && <Span>{text}</Span>}
      {src && <Icon src={src} size={iconSize || "0.75em"} />}
      {children}
    </StyledA>
  );
};
