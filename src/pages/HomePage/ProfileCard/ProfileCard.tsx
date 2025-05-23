import styled from "styled-components";

import { Grid, ImgIcon } from "@src/components";
import Mask from "@src/assets/icons/mask200.png";
import Me from "@src/assets/icons/me810.png";
import { H1, Span } from "@src/elements";
import { zIndexes } from "@src/zIndex";
import { AnimationProps } from "@src/animations";

import { Footer } from "./Footer";
import { Socials } from "./Socials";

const ContainerWidthInPx = 400;
const BorderThicknessInPx = 16;
const IconSizeInPx = ContainerWidthInPx - BorderThicknessInPx - 50;

const Container = styled(Grid)<AnimationProps>`
  height: 620px;
  width: ${ContainerWidthInPx}px;
  max-width: 100%;
  gap: 20px;
  grid-template-rows: ${IconSizeInPx}px 5fr 5fr 20fr;
  justify-items: center;
  box-shadow: 3px 2px 1px ${({ theme }) => theme.colors.softerBlack};
  border: ${BorderThicknessInPx}px solid
    ${({ theme }) => theme.colors.pallete.complementary.primary};
  background: ${({ theme }) => theme.softBackgroundColor};
  border-right: transparent;
  z-index: ${zIndexes.pages.home.profileCard};

  ${({ $animation: animation }) => animation()};
`;

const StyledIcon = styled(ImgIcon)`
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

export const ProfileCard = ({ $animation: animation }: AnimationProps) => {
  return (
    <Container $animation={animation}>
      <StyledIcon $iconSize={`${IconSizeInPx}px`} src={Me} alt="Photo of me" />
      <StyledH1>Xue Yufeng</StyledH1>
      <StyledSpan>Music theory enthusiast</StyledSpan>
      <Socials />
      <Footer />
    </Container>
  );
};
