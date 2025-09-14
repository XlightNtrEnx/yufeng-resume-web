import styled from "styled-components";

import { Img } from "@src/common/element/Img";
import { Span } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex/FlexColumn";

const StyledFlexColumn = styled(FlexColumn)`
  align-items: center;
  padding: 0.625em;
  gap: 0.625em;
  background-color: ${({ theme }) => theme.softBackgroundColor};
  cursor: pointer;
  border-left: 1.25em solid
    ${({ theme }) => theme.colors.pallete.complementary.primary};
  border-radius: 0.625em;
`;

const StyledImg = styled(Img)`
  width: 9em;
  height: 9em;
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
    <StyledFlexColumn onClick={onClick}>
      <StyledImg src={src} />
      <Span>{title}</Span>
    </StyledFlexColumn>
  );
};
