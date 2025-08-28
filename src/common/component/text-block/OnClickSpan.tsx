import { styled } from "styled-components";

import { LinkSVGIcon } from "@src/common/svg";
import { Span } from "@src/common/element/text";

const Container = styled(Span)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.negEvenSofterBackgroundColor};
  color: ${({ theme }) => theme.negTextColor};
  padding: 0.05em;
`;

const StyledLinkSVGIcon = styled(LinkSVGIcon)`
  color: ${({ theme }) => theme.negTextColor};
`;

export interface OnClickSpanProps {
  text: string;
  onClick: () => void;
}

export const OnClickSpan = ({ text, onClick }: OnClickSpanProps) => {
  return (
    <Container onClick={onClick}>
      {text} <StyledLinkSVGIcon width="0.75em" height="0.75em" />
    </Container>
  );
};
