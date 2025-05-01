import styled from "styled-components";

import { FlexColumn, ExternalLink, FlexRow } from "@src/components";
import { H2, Span } from "@src/elements";
import GitHub from "@src/assets/icons/github512.png";
import { ReactComponent as ColabSVGIcon } from "@src/assets/svgs/icons/google-colab.svg";
import { ImgIcon } from "@src/components";

import { MainMediaContainer } from "./MainMediaContainer";

const Container = styled(FlexColumn)`
  > *:not(:first-child) {
    padding-top: 1rem;
  }
`;

interface IProject {
  name: string;
  achievements: string;
  gitHubURL?: string;
  colabURL?: string;
  medias?: any[];
}

export class Project implements IProject {
  name: string;
  achievements: string;
  gitHubURL?: string;
  colabURL?: string;
  medias?: any[];

  constructor(project: IProject) {
    this.name = project.name;
    this.achievements = project.achievements;
    this.gitHubURL = project.gitHubURL;
    this.colabURL = project.colabURL;
    this.medias = project.medias;
  }
}

interface Props {
  projects: Project[];
}

const ProjectContainer = styled(FlexColumn)`
  align-items: start;
  gap: 1rem;
`;

const Links = styled(FlexRow)`
  gap: 0.3em;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.negSofterBackgroundColor};
  padding-left: 0.5em;
  > a {
    &:hover {
      background-color: ${({ theme }) => theme.negSofterBackgroundColor};
    }
  }
`;
const iconSize = "1.75em";
export const Projects = ({ projects }: Props) => {
  return (
    <Container>
      {projects.map((project, index) => {
        var count = 0;
        if (project.gitHubURL) count += 1;
        if (project.colabURL) count += 1;
        return (
          <ProjectContainer key={index}>
            <H2>{project.name}</H2>
            {count > 0 && (
              <Links>
                {project.gitHubURL && (
                  <ExternalLink href={project.gitHubURL}>
                    <ImgIcon iconSize={iconSize} src={GitHub} />
                  </ExternalLink>
                )}
                {project.colabURL && (
                  <ExternalLink href={project.colabURL}>
                    <ColabSVGIcon width={iconSize} height={iconSize} />
                  </ExternalLink>
                )}
              </Links>
            )}
            <Span>{project.achievements}</Span>
            {project.medias && <MainMediaContainer medias={project.medias} />}
          </ProjectContainer>
        );
      })}
    </Container>
  );
};
