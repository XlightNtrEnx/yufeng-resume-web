import { useState } from "react";

import { LI, P, UL } from "@src/elements";
import { publicPaths } from "@src/publicPaths";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

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
      medias={
        <ProjectMedias
          mediasDir={publicPaths.projectsDir.webResumeDir.path}
          totalMedias={3}
          skip={skip}
        />
      }
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
