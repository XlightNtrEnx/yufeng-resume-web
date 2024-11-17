import { ReactNode } from "react";
import { styled } from "styled-components";

import { A, Span } from "@src/elements";
import { Icon } from "@src/components";

const StyledA = styled(A)`
  text-decoration: none;
  line-height: 1;
  text-align: center;
  border-radius: 10px;

  > * {
    display: inline;
  }

  > *:last-child {
    margin-left: 0.5em;
  }
`;

interface Props {
  children?: ReactNode;
  href: string;
  text?: string;
  src?: string;
}

/**
 * Link to an external website
 */
export const ExternalLink = ({ children, href, text, src }: Props) => {
  return (
    <StyledA target="_blank" rel="noreferrer noopener" href={href}>
      <Span>{text}</Span>
      {src && <Icon src={src} size="0.75em" />}
      {children}
    </StyledA>
  );
};
