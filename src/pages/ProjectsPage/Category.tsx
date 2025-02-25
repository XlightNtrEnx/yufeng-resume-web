import styled from "styled-components";

import { Img, Span } from "@src/elements";
import { FlexColumn } from "@src/components";
import { Animation } from "@src/animations";

const Container = styled(FlexColumn)<{ animation?: Animation }>`
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: ${({ theme }) => theme.softBackgroundColor};
  cursor: pointer;
  border-left: 20px solid
    ${({ theme }) => theme.colors.pallete.complementary.primary};
  border-radius: 10px;

  ${({ animation }) => (animation ? animation() : undefined)}
`;

const StyledImg = styled(Img)`
  width: 160px;
  height: 160px;
  overflow: hidden;
`;

interface Props {
  title: string;
  src: string;
  onClick: () => void;
  animation?: any;
}

export const Category = ({ title, src, onClick, animation }: Props) => {
  return (
    <Container animation={animation} onClick={onClick}>
      <StyledImg src={src} />
      <Span>{title}</Span>
    </Container>
  );
};
