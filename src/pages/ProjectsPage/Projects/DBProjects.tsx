import { useState } from "react";

import mongo1 from "@src/assets/images/projects/mongo/1.png";
import mongo2 from "@src/assets/images/projects/mongo/2.png";
import mongo3 from "@src/assets/images/projects/mongo/3.png";
import mongo4 from "@src/assets/images/projects/mongo/4.png";
import { SpanOnClick } from "@src/components";
import { P } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
} from "./Project";
import { Projects } from "./Projects";

const mongoMedias = [mongo1, mongo2, mongo3, mongo4];
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
            <SpanOnClick onClick={() => setSkip([1])}>
              password hashing
            </SpanOnClick>
          </P>
          <P>
            Employed{" "}
            <SpanOnClick onClick={() => setSkip([2])}>indexes</SpanOnClick> in{" "}
            <SpanOnClick onClick={() => setSkip([3])}>java</SpanOnClick> to
            force all users to have unique email and username
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
      medias={<ProjectMedias medias={mongoMedias} skip={skip} />}
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
