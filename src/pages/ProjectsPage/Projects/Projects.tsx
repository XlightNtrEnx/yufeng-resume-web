import styled from "styled-components";

import { FlexColumn } from "@src/components";

import { Project, ProjectProps } from "./Project";

const Container = styled(FlexColumn)`
  > *:not(:first-child) {
    padding-top: 1rem;
  }
`;

interface ProjectsProps {
  projects: ProjectProps[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Container>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Container>
  );
};
