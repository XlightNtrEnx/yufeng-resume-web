import styled from "styled-components";

import { FlexColumn } from "@src/components";

import { AboutMe } from "./AboutMe";

const Container = styled(FlexColumn)<{ animation?: any }>`
  height: 550px;
  width: 500px;
  padding: 20px;
  flex-direction: column;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.softWhite};

  ${({ animation }) => animation()};
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
