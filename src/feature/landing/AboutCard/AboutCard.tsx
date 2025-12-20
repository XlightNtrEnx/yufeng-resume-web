import styled from "styled-components";

import { FlexColumn } from "@src/common/layout/flex";

import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

const StyledFlexColumn = styled(FlexColumn)`
  height: 34.375em;
  max-width: 33em;
  width: 100%;
  padding: 1.25em;
  gap: 1em;
  align-items: start;
  background: ${({ theme }) => theme.softerBackgroundColor};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
`;

export const AboutCard = () => {
  return (
    <StyledFlexColumn>
      <AboutMe />
      <Skills />
    </StyledFlexColumn>
  );
};
