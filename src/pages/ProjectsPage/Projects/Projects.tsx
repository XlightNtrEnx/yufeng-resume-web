import styled from "styled-components";

import { FlexColumn } from "@src/components";

import { Project } from "./Project";

const Container = styled(FlexColumn)`
  > *:not(:first-child) {
    padding-top: 1rem;
  }
`;

interface ProjectsProps {
  children:
    | React.ReactElement<typeof Project>
    | React.ReactElement<typeof Project>[];
}

/**
 * Example usage:
 * ```jsx
 * <Projects>
 *  <Project />
 * </Projects>
 * ```
 */
export const Projects = ({ children }: ProjectsProps) => {
  return <Container>{children}</Container>;
};
