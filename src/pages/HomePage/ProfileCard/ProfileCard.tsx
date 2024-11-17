import styled, { css } from "styled-components";

import { Grid, Icon } from "@src/components";
import Mask from "@src/assets/icons/mask200.png";
import Me from "@src/assets/icons/me810.png";
import { H1, Span } from "@src/elements";
import { fadeInFromLeft } from "@src/keyframes";

import { Footer } from "./Footer";
import { Socials } from "./Socials";

const ContainerWidthInPx = 400;
const BorderThicknessInPx = 16;
const IconSizeInPx = ContainerWidthInPx - BorderThicknessInPx - 50;

const Container = styled(Grid)<{ animate?: boolean }>`
  height: 620px;
  width: ${ContainerWidthInPx}px;
  gap: 20px;
  grid-template-rows: ${IconSizeInPx}px 5fr 5fr 20fr;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 3px 2px 1px ${({ theme }) => theme.colors.softerBlack};
  border: ${BorderThicknessInPx}px solid
    ${({ theme }) => theme.colors.pallete.complementary.primary};
  border-right: transparent;
  z-index: 9998;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeInFromLeft} 0.7s;
    `}
`;

const StyledIcon = styled(Icon)`
  -webkit-mask-image: url(${Mask});
  mask-image: url(${Mask});
  mask-repeat: no-repeat;
  mask-size: contain;
  object-fit: contain;
`;

const StyledH1 = styled(H1)``;

const StyledSpan = styled(Span)`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pallete.complementary.primary};
`;

interface Props {
  animate?: boolean;
}

export const ProfileCard = ({ animate }: Props) => {
  return (
    <Container animate={animate}>
      <StyledIcon
        size={`${IconSizeInPx}px`}
        src={Me}
        alt="Photo of me"
      ></StyledIcon>
      <StyledH1>Xue Yufeng</StyledH1>
      <StyledSpan>Music theory enthusiast</StyledSpan>
      <Socials />
      <Footer />
    </Container>
  );
};
