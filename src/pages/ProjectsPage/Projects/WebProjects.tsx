import media1 from "@src/assets/images/projects/web-resume/1.png";
import media2 from "@src/assets/images/projects/web-resume/2.png";
import media3 from "@src/assets/images/projects/web-resume/3.png";

import { LI, P, UL } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
} from "./Project";
import { Projects } from "./Projects";

const resumeMedias = [media1, media2, media3];
const ResumeProject = () => {
  return (
    <Project
      name="Resume"
      achievements={
        <ProjectAchievements>
          <P>
            Learnt how to build an interactive and mobile responsive website as
            well as how to deploy it
          </P>
          <UL>
            <LI>React (frontend)</LI>
            <LI>Firebase (backend + hosting) (Fig 2)</LI>
            <LI>Github actions (CI/CD) (Fig 3)</LI>
          </UL>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks gitHubURL="https://github.com/XlightNtrEnx/yufeng-resume-web" />
      }
      medias={<ProjectMedias medias={resumeMedias} />}
    />
  );
};

export const WebProjects = () => {
  return (
    <Projects>
      <ResumeProject />
    </Projects>
  );
};
