import styled from "styled-components";

import { FlexColumn, ExternalLink, FlexRow } from "@src/components";
import { H2, Span } from "@src/elements";
import GitHub from "@src/assets/icons/github512.png";
import { ReactComponent as ColabSVGIcon } from "@src/assets/svgs/icons/google-colab.svg";

import { MainMediaContainer } from "./MainMediaContainer";

const Container = styled(FlexColumn)`
  > *:not(:first-child) {
    padding-top: 1rem;
  }
`;

interface Project {
  name: string;
  achievements: string;
  gitHubLink?: string;
  colabLink?: string;
  medias?: any[];
}

interface Props {
  projects: Project[];
}

const ProjectContainer = styled(FlexColumn)`
  align-items: start;
  gap: 1rem;
`;

const Links = styled(FlexRow)`
  gap: 0.75em;
`;

export const Projects = ({ projects }: Props) => {
  return (
    <Container>
      {projects.map((project, index) => (
        <ProjectContainer key={index}>
          <H2>{project.name}</H2>
          <Span>{project.achievements}</Span>
          <Links>
            {project.gitHubLink && (
              <ExternalLink
                href={project.gitHubLink}
                src={GitHub}
                iconSize="1.5em"
              />
            )}
            {project.colabLink && (
              <ExternalLink
                href={project.colabLink}
                SVG={ColabSVGIcon}
                iconSize="1.5em"
              />
            )}
          </Links>
          {project.medias && <MainMediaContainer medias={project.medias} />}
        </ProjectContainer>
      ))}
    </Container>
  );
};
