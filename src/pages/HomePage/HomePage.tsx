import styled from "styled-components";

import { Grid } from "@src/components";
import { fadeInFromRight, fadeInFromTop } from "@src/animations";

import { AboutCard } from "./AboutCard";
import { ProfileCard } from "./ProfileCard";

const Container = styled(Grid)`
  grid-template-columns: auto auto;
  align-items: center;
`;

export const HomePage = () => {
  return (
    <Container>
      <ProfileCard animation={fadeInFromTop} />
      <AboutCard animation={fadeInFromRight} />
    </Container>
  );
};
