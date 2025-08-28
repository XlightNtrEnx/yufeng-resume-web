import styled from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
import { FlexColumn } from "@src/common/layout/flex";

import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

const StyledFlexColumn = styled(FlexColumn)`
  height: 550px;
  width: 500px;
  max-width: 100%;
  padding: 20px;
  gap: 1rem;
  align-items: start;
  background: ${({ theme }) => theme.softerBackgroundColor};
  overflow-y: auto;

  @media (max-width: ${mobileBreakpointInPx}px) {
    margin: 10px 0 100px 0;
  }
`;

export const AboutCard = () => {
  return (
    <StyledFlexColumn>
      <AboutMe />
      <Skills />
    </StyledFlexColumn>
  );
};
