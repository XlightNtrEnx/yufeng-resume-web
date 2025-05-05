import { useState } from "react";

import t4isa1 from "@src/assets/images/projects/term4-infosys-api/1.png";
import t4isa2 from "@src/assets/images/projects/term4-infosys-api/2.png";
import t4isa3 from "@src/assets/images/projects/term4-infosys-api/3.png";
import t4isa4 from "@src/assets/images/projects/term4-infosys-api/4.png";
import { P, LI, UL } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  SpanOnClick,
} from "./Project";
import { Projects } from "./Projects";

const term4InfoSysAPIMedias = [t4isa1, t4isa2, t4isa3, t4isa4];
const Term4InfoSysAPIProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Combined API for AI, app, and database (java, HTTP)"
      achievements={
        <ProjectAchievements>
          <P>
            My team had 3 components that needed to talk to one another so I
            created a java spring framework based HTTP server for communication
            between all 3. The server is RESTful with the exception of the
            session based authentication for the app.
            <UL>
              <LI>
                Send verification emails upon registration{" "}
                <SpanOnClick onClick={() => setSkip([0])}>
                  (MailService)
                </SpanOnClick>
              </LI>
              <LI>
                Customized authentication process as we did not need login page
                and this is meant to be used as API{" "}
                <SpanOnClick onClick={() => setSkip([1])}>
                  (SecurityConfiguration)
                </SpanOnClick>
              </LI>
              <LI>
                Used MongoDB's SDK to connect to the database{" "}
                <SpanOnClick onClick={() => setSkip([2])}>
                  (MongoClientConnection)
                </SpanOnClick>
              </LI>
              <LI>
                Enforced data integrity and consistency by indexing the database{" "}
                <SpanOnClick onClick={() => setSkip([3])}>
                  (UserCollection)
                </SpanOnClick>
              </LI>
            </UL>
          </P>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          gitHubURL="https://github.com/Term-4-CSD-Team-48/api"
          docsURL="https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing"
        />
      }
      medias={<ProjectMedias medias={term4InfoSysAPIMedias} skip={skip} />}
    />
  );
};

export const ServerProjects = () => {
  return (
    <Projects>
      <Term4InfoSysAPIProject />
    </Projects>
  );
};
