import { useState } from "react";

import { P } from "@src/elements";
import { paths } from "@src/router";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const Term4InfoSysAICloudProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Deploying EC2 instances and configuring their VPC"
      achievements={
        <ProjectAchievements>
          <P>
            My team's physical prototype needed to be lightweight so instead of
            hauling our own desktop around with a GPU, I developed a cloud based
            solution to house our AI server
          </P>
          <P>
            Choice of Amazon Machine Image (AMI) was the more expensive Ubuntu
            for it's better support for CUDA and nginx.
          </P>
          <P>
            We also needed a secondary server (API) and I chose Amazon Linux for
            that because it's cheaper and still can deploy a java based server.
          </P>
          <P>
            The <OnClick onClick={() => setSkip([1])}>VPC</OnClick> also allowed
            us to put the servers into one private network for more security by
            restricting the different types of requests using tools like Route
            Tables, Network ACLs, and Security Groups.
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
          mediasDir={paths.public.projectsDir.term4InfosysCloudDir.path}
          skip={skip}
          totalMedias={2}
        />
      }
    />
  );
};

export const CloudProjects = () => {
  return (
    <Projects>
      <Term4InfoSysAICloudProject />
    </Projects>
  );
};
