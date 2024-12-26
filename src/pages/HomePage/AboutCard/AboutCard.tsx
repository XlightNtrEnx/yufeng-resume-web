import styled from "styled-components";

import { FlexColumn } from "@src/components";

import { mobileBreakpointInPx } from "@src/atoms";

import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

const Container = styled(FlexColumn)<{ animation?: any }>`
  height: 550px;
  width: 500px;
  max-width: 100%;
  padding: 20px;
  gap: 1rem;
  align-items: start;
  background: ${({ theme }) => theme.softerBackgroundColor};
  overflow-y: auto;

  ${({ animation }) => animation()};

  @media (max-width: ${mobileBreakpointInPx}px) {
    margin: 50px 0 100px 0;
  }
`;

interface Props {
  animation?: any;
}

export const AboutCard = ({ animation }: Props) => {
  return (
    <Container animation={animation}>
      <AboutMe />
      <Skills />
    </Container>
  );
};
