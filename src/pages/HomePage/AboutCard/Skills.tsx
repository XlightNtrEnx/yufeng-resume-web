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

const StrikethroughP = styled(StyledP)`
  text-decoration: line-through;
`;

export const Skills = () => {
  return (
    <Container>
      <PartialColorH2>Proven skills</PartialColorH2>
      <StyledP>AI (Computer Vision) 📸</StyledP>
      <StyledP>Android dev 👽</StyledP>
      <StyledP>CI/CD ⚙️</StyledP>
      <StyledP>Cloud computing 💨</StyledP>
      <StyledP>Electronic circuit design 📟</StyledP>
      <StyledP>Web dev (Interactive and mobile responsive) 🌐</StyledP>
      <StrikethroughP>Vibe coding 💩</StrikethroughP>
    </Container>
  );
};
