import { Span } from "@src/elements";
import { styled } from "styled-components";

const Container = styled(Span)`
  cursor: pointer;
  color: ${({ theme }) => theme.hyperLinkColor};
  display: inline;
  text-decoration: underline;
`;

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const SpanOnClick = ({ children, onClick }: Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};
