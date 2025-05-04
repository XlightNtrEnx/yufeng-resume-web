import { useState } from "react";

import media1 from "@src/assets/images/projects/web-resume/1.png";
import media2 from "@src/assets/images/projects/web-resume/2.png";
import media3 from "@src/assets/images/projects/web-resume/3.png";
import { SpanOnClick } from "@src/components";
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
  const [skip, setSkip] = useState<number[]>([0]);
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
            <LI>
              <SpanOnClick onClick={() => setSkip([0])}>React</SpanOnClick>{" "}
              (frontend)
            </LI>
            <LI>
              <SpanOnClick onClick={() => setSkip([1])}>Firebase</SpanOnClick>{" "}
              (backend + hosting)
            </LI>
            <LI>
              <SpanOnClick onClick={() => setSkip([2])}>
                Github actions
              </SpanOnClick>{" "}
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
