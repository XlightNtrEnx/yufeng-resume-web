import styled from "styled-components";

import { PartialColorH2 } from "@src/pages/HomePage/AboutCard/components";
import { FlexColumn } from "@src/components";
import { P } from "@src/elements";

const Container = styled(FlexColumn)`
  align-items: start;
  gap: 15px;
`;

const StyledP = styled(P)`
  padding-left: 0.5em;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.colors.black};
`;

export const Skills = () => {
  return (
    <Container>
      <PartialColorH2>Proven skills</PartialColorH2>
      <StyledP>Mobile responsive and interactive web dev 🌐</StyledP>
      <StyledP>Computer vision AI 📸</StyledP>
      <StyledP>Electronic circuit design 📟</StyledP>
      <StyledP>Cloud computing 💨</StyledP>
    </Container>
  );
};
