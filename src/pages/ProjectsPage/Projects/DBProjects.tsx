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

const MongoProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="MongoDB for users (java)"
      achievements={
        <ProjectAchievements>
          <P>
            My teammates wanted authentication so I made a MongoDB database to
            store all the users securely with{" "}
            <OnClick onClick={() => setSkip([1])}>password hashing</OnClick>
          </P>
          <P>
            Employed <OnClick onClick={() => setSkip([2])}>indexes</OnClick> in{" "}
            <OnClick onClick={() => setSkip([3])}>java</OnClick> to force all
            users to have unique email and username
          </P>
          <P>
            MongoDB was chosen because I learnt about SQL before and was curious
            to learn about NoSQL, and because it's free for our prototype.
          </P>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          gitHubURL="https://github.com/Term-4-CSD-Team-48/api"
          docsURL="https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing"
        />
      }
      medias={
        <ProjectMedias
          mediasDir={paths.public.projectsDir.mongoDir.path}
          skip={skip}
          totalMedias={4}
        />
      }
    />
  );
};

export const DBProjects = () => {
  return (
    <Projects>
      <MongoProject />
    </Projects>
  );
};
