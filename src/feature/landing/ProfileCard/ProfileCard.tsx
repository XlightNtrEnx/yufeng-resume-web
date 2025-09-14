import styled from "styled-components";

import { Grid } from "@src/common/layout/grid/Grid";
import { ImgIcon } from "@src/common/component/ImgIcon";
import { H1, Span } from "@src/common/element/text";
import { paths } from "@src/router/paths";

import { Footer } from "./Footer";
import { Socials } from "./Socials";

const StyledGrid = styled(Grid)`
  height: 38.75em;
  max-width: 25em;
  width: 100%;
  gap: 1.25em;
  overflow-y: auto;
  grid-template-rows: 20.875em 2.4em 1.2em 2.325em 1.825em;
  justify-items: center;
  box-shadow: 3px 2px 1px ${({ theme }) => theme.colors.softerBlack};
  border: 1em solid ${({ theme }) => theme.colors.pallete.complementary.primary};
  background: ${({ theme }) => theme.softBackgroundColor};
  border-right: transparent;
`;

const StyledIcon = styled(ImgIcon)`
  -webkit-mask-image: url(${paths.public.meDir.mask});
  mask-image: url(${paths.public.meDir.mask});
  mask-repeat: no-repeat;
  mask-size: contain;
  object-fit: contain;
  height: 100%;
`;

const StyledSpan = styled(Span)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pallete.complementary.primary};
`;

export const ProfileCard = () => {
  return (
    <StyledGrid>
      <StyledIcon src={paths.public.meDir.me} alt="Photo of me" />
      <H1>Xue Yufeng</H1>
      <StyledSpan>Music theory enthusiast</StyledSpan>
      <Socials />
      <Footer />
    </StyledGrid>
  );
};
