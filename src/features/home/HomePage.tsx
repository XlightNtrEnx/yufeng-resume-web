import styled from "styled-components";

import { Grid } from "@src/common/layouts/grid/Grid";
import { fadeInFromRight, fadeInFromTop } from "@src/common/animations";
import { mobileBreakpointInPx } from "@src/common/atoms/isMobile";

import { AboutCard } from "./AboutCard";
import { ProfileCard } from "./ProfileCard";

const Container = styled(Grid)`
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

export const HomePage = () => {
  return (
    <Container>
      <ProfileCard />
      <AboutCard />
    </Container>
  );
};
