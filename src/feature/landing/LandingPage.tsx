import styled from "styled-components";

import { Grid } from "@src/common/layout/grid/Grid";
import { fadeInFromRight, fadeInFromTop } from "@src/common/animation";
import { mobileBreakpointInPx } from "@src/common/atom/isMobile";

import { AboutCard } from "./AboutCard";
import { ProfileCard } from "./ProfileCard";

const StyledGrid = styled(Grid)`
  grid-template-columns: auto auto;
  align-items: center;

  @media (max-width: ${mobileBreakpointInPx}px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }

  & > :first-child {
    position: relative;
    ${fadeInFromTop()}
  }

  & > :nth-child(2) {
    ${fadeInFromRight()};
  }
`;

export const LandingPage = () => {
  return (
    <StyledGrid>
      <ProfileCard />
      <AboutCard />
    </StyledGrid>
  );
};

export default LandingPage;
