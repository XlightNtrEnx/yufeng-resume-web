import styled from "styled-components";

import { H2, P } from "@src/elements";
import { Grid } from "@src/components";

import { Stats } from "./Stats";

const Container = styled(Grid)`
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr
  align-items: start;
`;

const StyledH2 = styled(H2)`
  grid-column: 1 / -1;
  justify-self: start;

  &::first-letter {
    color: ${({ theme }) => theme.colors.pallete.complementary.primary};
  }
`;

const StyledP = styled(P)`
  line-height: 1.5;
`;

export const AboutMe = () => {
  return (
    <Container>
      <StyledH2>About me</StyledH2>
      <StyledP>
        Hello! I am Xue Yufeng. As a young engineer, I am excited to learn more
        about the many different types of software development out there.
      </StyledP>
      <Stats />
    </Container>
  );
};
