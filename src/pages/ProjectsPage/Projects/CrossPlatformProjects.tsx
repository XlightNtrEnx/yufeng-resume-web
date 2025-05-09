import { P } from "@src/elements";

import { Project, ProjectAchievements } from "./Project";
import { Projects } from "./Projects";

const QtProject = () => {
  return (
    <Project
      name="Payroll software"
      achievements={
        <ProjectAchievements>
          <P>Started learning how to use Qt framework on 9th May 2025</P>
        </ProjectAchievements>
      }
    />
  );
};

export const CrossPlatformProjects = () => {
  return (
    <Projects>
      <QtProject />
    </Projects>
  );
};
