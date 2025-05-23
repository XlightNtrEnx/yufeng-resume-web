import { useState } from "react";

import { BlueUnderlineExternalLink } from "@src/components";
import { P, LI, UL } from "@src/elements";
import { paths } from "@src/router";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const ParcelEyeProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="ParcelEye (java)"
      achievements={
        <ProjectAchievements>
          <P>
            Video by Tok Jing Huan:{" "}
            <BlueUnderlineExternalLink href="https://www.linkedin.com/in/jinghuan/">
              https://www.linkedin.com/in/jinghuan/
            </BlueUnderlineExternalLink>
          </P>
          <P>Worked on the frontend to deliver features like</P>
          <UL>
            <LI>
              HTTP communication capability{" "}
              <OnClick onClick={() => setSkip([1])}>(ApiClient)</OnClick>
            </LI>
            <LI>
              Push notifications{" "}
              <OnClick onClick={() => setSkip([2])}>
                (MyFirebaseMessagingService)
              </OnClick>
            </LI>
            <LI>
              Video player{" "}
              <OnClick onClick={() => setSkip([3])}>
                (HLS consumption by PlayerViewModel)
              </OnClick>
            </LI>
          </UL>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          gitHubURL="https://github.com/Term-4-CSD-Team-48/parceleye"
          docsURL="https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing"
        />
      }
      medias={
        <ProjectMedias
          mediasDir={paths.public.projectsDir.parcelEyeDir.path}
          skip={skip}
          totalMedias={4}
          nonPNGMedias={{ 1: ".mp4" }}
        />
      }
    />
  );
};

export const AndroidProjects = () => {
  return (
    <Projects>
      <ParcelEyeProject />
    </Projects>
  );
};
