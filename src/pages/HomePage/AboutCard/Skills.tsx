import styled from "styled-components";

import { FlexColumn, InternalLink } from "@src/components";
import { P } from "@src/elements";
import { categoryToURL } from "@src/pages/ProjectsPage";

import { PartialColorH2 } from "./components";

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

const StyledInternalLink = styled(InternalLink)`
  text-decoration: none;
`;

const Skill = ({ text, to }: { text: string; to: string }) => {
  return (
    <StyledInternalLink to={to}>
      <StyledP>{text}</StyledP>
    </StyledInternalLink>
  );
};

export const Skills = () => {
  return (
    <Container>
      <PartialColorH2>Proven skills (Click below!)</PartialColorH2>
      <Skill to={categoryToURL.ai} text="AI (Computer Vision) 📸" />
      <Skill to={categoryToURL.android} text="Android dev 👽" />
      <Skill to={categoryToURL.containerization} text="CI/CD ⚙️" />
      <Skill
        to={categoryToURL.electricalEngineering}
        text="Some electronic circuit design 📟"
      />
      <Skill to={categoryToURL.cloud} text="Cloud computing 💨" />
      <Skill
        to={categoryToURL.web}
        text="Web dev (Interactive and mobile responsive) 🌐"
      />
      <Skill
        to={categoryToURL.database}
        text="Lil' bit of database management 🛢"
      />
      <Skill to={categoryToURL.server} text="Server building 💻" />
      <Skill to={categoryToURL.containerization} text="Containerization 🫙" />
      <StrikethroughP>Vibe coding 💩</StrikethroughP>
    </Container>
  );
};
