import { useState } from "react";

import pe1 from "@src/assets/videos/projects/parcel-eye/1.mp4";
import pe2 from "@src/assets/images/projects/parcel-eye/2.png";
import pe3 from "@src/assets/images/projects/parcel-eye/3.png";
import pe4 from "@src/assets/images/projects/parcel-eye/4.png";
import { P, LI, UL } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const parcelEyeMedias = [pe1, pe2, pe3, pe4];
const ParcelEyeProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="ParcelEye (java)"
      achievements={
        <ProjectAchievements>
          <P>
            Worked on the frontend to deliver features like
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
          </P>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          gitHubURL="https://github.com/Term-4-CSD-Team-48/parceleye"
          docsURL="https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing"
        />
      }
      medias={<ProjectMedias medias={parcelEyeMedias} skip={skip} />}
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
