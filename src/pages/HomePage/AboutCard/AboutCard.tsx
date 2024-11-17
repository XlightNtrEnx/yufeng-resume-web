import styled, { css } from "styled-components";

import { fadeInFromRight } from "@src/keyframes";
import { FlexRow } from "@src/components";

import { AboutMe } from "./AboutMe";

const Container = styled(FlexRow)<{ animate?: boolean }>`
  height: 550px;
  width: 500px;
  padding: 20px;
  flex-direction: column;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.softWhite};

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeInFromRight} 0.7s;
    `}
`;

interface Props {
  animate?: boolean;
}

export const AboutCard = ({ animate }: Props) => {
  return (
    <Container animate={animate}>
      <AboutMe />
    </Container>
  );
};
