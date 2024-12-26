import styled from "styled-components";

import { FlexColumn, ExternalLink } from "@src/components";
import { H2, Span } from "@src/elements";
import GitHub from "@src/assets/icons/github512.png";

const Container = styled(FlexColumn)`
  > *:not(:first-child) {
    border-top: 1px solid black;
  }
`;

interface Project {
  name: string;
  achievements: string;
  gitHubLink?: string;
}

interface Props {
  projects: Project[];
}

const ProjectContainer = styled(FlexColumn)`
  align-items: start;
  gap: 1rem;
`;

export const Projects = ({ projects }: Props) => {
  return (
    <Container>
      {projects.map((project, index) => (
        <ProjectContainer key={index}>
          <H2>{project.name}</H2>
          <Span>{project.achievements}</Span>
          {project.gitHubLink && (
            <ExternalLink
              href={project.gitHubLink}
              src={GitHub}
              iconSize="1.5em"
            />
          )}
        </ProjectContainer>
      ))}
    </Container>
  );
};
