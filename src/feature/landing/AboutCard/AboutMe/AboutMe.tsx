import styled from "styled-components";

import { P } from "@src/common/element/text";
import { Grid } from "@src/common/layout/grid/Grid";
import { mobileBreakpointInPx } from "@src/common/atom/isMobile";

import { PartialColorH2 } from "../components";

import { Stats } from "./Stats";

const Container = styled(Grid).attrs({ as: "article" })`
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr
  align-items: start;

  @media (max-width: ${mobileBreakpointInPx}px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPartialColorH2 = styled(PartialColorH2)`
  grid-column: 1 / -1;
  justify-self: start;
`;

export const AboutMe = () => {
  return (
    <Container>
      <StyledPartialColorH2>About me</StyledPartialColorH2>
      <P>
        Hello! I am Yufeng. I am excited to further my knowledge in computer
        science.
      </P>
      <Stats />
    </Container>
  );
};
