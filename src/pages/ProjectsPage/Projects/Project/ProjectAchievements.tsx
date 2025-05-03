import { createContext } from "react";
import { styled } from "styled-components";

import { FlexColumn } from "@src/components";

const ProjectAchievementsContext = createContext(null);
interface ProjectAchievementsProps {
  children: React.ReactNode;
}

const Container = styled(FlexColumn)`
  gap: 1em;

  > * {
    margin: 0;
  }
`;
export const ProjectAchievements = ({ children }: ProjectAchievementsProps) => {
  return (
    <ProjectAchievementsContext.Provider value={null}>
      <Container>{children}</Container>
    </ProjectAchievementsContext.Provider>
  );
};
