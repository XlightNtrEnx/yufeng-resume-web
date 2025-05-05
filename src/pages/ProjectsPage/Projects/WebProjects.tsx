import { useState } from "react";

import media1 from "@src/assets/images/projects/web-resume/1.png";
import media2 from "@src/assets/images/projects/web-resume/2.png";
import media3 from "@src/assets/images/projects/web-resume/3.png";
import { LI, P, UL } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const resumeMedias = [media1, media2, media3];
const ResumeProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Resume (typescript)"
      achievements={
        <ProjectAchievements>
          <P>
            Learnt how to build an interactive and mobile responsive website as
            well as how to deploy it
          </P>
          <UL>
            <LI>
              <OnClick onClick={() => setSkip([0])}>React</OnClick> (frontend)
            </LI>
            <LI>
              <OnClick onClick={() => setSkip([1])}>Firebase</OnClick> (backend
              + hosting)
            </LI>
            <LI>
              <OnClick onClick={() => setSkip([2])}>Github actions</OnClick>{" "}
              (CI/CD)
            </LI>
          </UL>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks gitHubURL="https://github.com/XlightNtrEnx/yufeng-resume-web" />
      }
      medias={<ProjectMedias medias={resumeMedias} skip={skip} />}
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
