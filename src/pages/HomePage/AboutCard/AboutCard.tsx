import styled from "styled-components";

import { FlexColumn } from "@src/components";

import { AboutMe } from "./AboutMe";
import { mobileBreakpointInPx } from "@src/atoms";

const Container = styled(FlexColumn)<{ animation?: any }>`
  height: 550px;
  width: 500px;
  max-width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.softWhite};

  ${({ animation }) => animation()};

  @media (max-width: ${mobileBreakpointInPx}px) {
    height: 100%;
  }
`;

interface Props {
  animation?: any;
}

export const AboutCard = ({ animation }: Props) => {
  return (
    <Container animation={animation}>
      <AboutMe />
    </Container>
  );
};
