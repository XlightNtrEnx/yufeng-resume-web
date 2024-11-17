import styled from "styled-components";
import { useState, useEffect } from "react";

import { Grid } from "@src/components";

import { AboutCard } from "./AboutCard";
import { ProfileCard } from "./ProfileCard";

const Container = styled(Grid)`
  grid-template-columns: auto auto auto;
  align-items: center;
`;

export const HomePage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container>
      <ProfileCard animate={animate} />
      <AboutCard animate={animate} />
    </Container>
  );
};
