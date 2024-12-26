import styled from "styled-components";

import { PartialColorH2 } from "@src/pages/HomePage/AboutCard/components";
import { P } from "@src/elements";
import { Grid } from "@src/components";
import { mobileBreakpointInPx } from "@src/atoms";

import { Stats } from "./Stats";

const Container = styled(Grid)`
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
        Hello! I am Xue Yufeng. As a young engineer, I am excited to broaden and
        deepen my knowledge in the field of computer science.
      </P>
      <Stats />
    </Container>
  );
};
