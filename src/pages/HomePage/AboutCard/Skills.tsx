import styled from "styled-components";

import { PartialColorH2 } from "@src/pages/HomePage/AboutCard/components";
import { FlexColumn } from "@src/components";
import { P } from "@src/elements";

const Container = styled(FlexColumn)`
  align-items: start;
  gap: 15px;
`;

export const Skills = () => {
  return (
    <Container>
      <PartialColorH2>Skills</PartialColorH2>
      <P>Mobile responsive and interactive web development 🌐</P>
      <P>Image recognition AI 🌄</P>
    </Container>
  );
};
