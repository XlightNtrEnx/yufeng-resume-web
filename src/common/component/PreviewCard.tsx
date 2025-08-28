import styled from "styled-components";

import { Img } from "@src/common/element/Img";
import { Span } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex/FlexColumn";

const Container = styled(FlexColumn)`
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: ${({ theme }) => theme.softBackgroundColor};
  cursor: pointer;
  border-left: 20px solid
    ${({ theme }) => theme.colors.pallete.complementary.primary};
  border-radius: 10px;
`;

const StyledImg = styled(Img)`
  width: 160px;
  height: 160px;
  object-fit: cover;
  overflow: hidden;
`;

export interface PreviewCardProps {
  title: string;
  src: string;
  onClick: () => void;
}

export const PreviewCard = ({ title, src, onClick }: PreviewCardProps) => {
  return (
    <Container onClick={onClick}>
      <StyledImg src={src} />
      <Span>{title}</Span>
    </Container>
  );
};
