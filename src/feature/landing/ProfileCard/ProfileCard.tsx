import styled from "styled-components";

import { Grid } from "@src/common/layout/grid/Grid";
import { ImgIcon } from "@src/common/component/ImgIcon";
import { H1, Span } from "@src/common/element/text";
import { paths } from "@src/router/paths";

import { Footer } from "./Footer";
import { Socials } from "./Socials";

const ContainerWidthInPx = 400;
const BorderThicknessInPx = 16;
const IconSizeInPx = ContainerWidthInPx - BorderThicknessInPx - 50;

const Container = styled(Grid)`
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
`;

const StyledIcon = styled(ImgIcon)`
  -webkit-mask-image: url(${paths.public.meDir.mask});
  mask-image: url(${paths.public.meDir.mask});
  mask-repeat: no-repeat;
  mask-size: contain;
  object-fit: contain;
`;

const StyledSpan = styled(Span)`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pallete.complementary.primary};
`;

export const ProfileCard = () => {
  return (
    <Container>
      <StyledIcon
        $iconSize={`${IconSizeInPx}px`}
        src={paths.public.meDir.me}
        alt="Photo of me"
      />
      <H1>Xue Yufeng</H1>
      <StyledSpan>Music theory enthusiast</StyledSpan>
      <Socials />
      <Footer />
    </Container>
  );
};
