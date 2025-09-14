import styled from "styled-components";

import { P } from "@src/common/element/text";
import { Grid } from "@src/common/layout/grid/Grid";

import { PartialColorH2 } from "../components";

import { Stats } from "./Stats";

const StyledGrid = styled(Grid).attrs({ as: "article" })`
  width: 100%;
  grid-template-columns: repeat(auto-fill, 13.9em);
  grid-template-rows: 2.5em;

  & > :first-child {
    grid-column: 1 / -1;
    justify-self: start;
  }
`;

export const AboutMe = () => {
  return (
    <StyledGrid>
      <PartialColorH2>About me</PartialColorH2>
      <P>
        Hello! I am Yufeng. I am excited to further my knowledge in computer
        science.
      </P>
      <Stats />
    </StyledGrid>
  );
};
