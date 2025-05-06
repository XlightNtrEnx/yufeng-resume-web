import { useState } from "react";

import { P } from "@src/elements";
import { publicPaths } from "@src/publicPaths";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const Term4InfoSysAIContainerizationProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Containerization for my project submission"
      achievements={
        <ProjectAchievements>
          <P>
            For submission to my university, it was required that the code be
            runnable. Unfortunately it is only runnable on linux and I doubted
            that my professors would use linux. As such I containerized my AI
            server.
          </P>
          <P>
            It was initially 32GB compressed but I got it down to slightly under{" "}
            <OnClick onClick={() => setSkip([0])}>5GB</OnClick> using{" "}
            <OnClick onClick={() => setSkip([1])}>multi-stage builds</OnClick>
          </P>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          gitHubURL="https://github.com/Term-4-CSD-Team-48/ai"
          docsURL="https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing"
        />
      }
      medias={
        <ProjectMedias
          mediasDir={
            publicPaths.projectsDir.term4InfosysAIContainerizationDir.path
          }
          skip={skip}
          totalMedias={5}
        />
      }
    />
  );
};

export const ContainerizationProjects = () => {
  return (
    <Projects>
      <Term4InfoSysAIContainerizationProject />
    </Projects>
  );
};
