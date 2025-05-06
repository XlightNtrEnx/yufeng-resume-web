import { styled } from "styled-components";

import { ReactComponent as LinkSVGIcon } from "@src/assets/svgs/icons/link.svg";
import { Span } from "@src/elements";

const Container = styled(Span)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.negEvenSofterBackgroundColor};
  color: ${({ theme }) => theme.negTextColor};
  padding: 0.05em;
`;

const StyledLinkSVGIcon = styled(LinkSVGIcon)`
  color: ${({ theme }) => theme.negTextColor};
`;

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const OnClick = ({ children, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {children} <StyledLinkSVGIcon width="0.75em" height="0.75em" />
    </Container>
  );
};
