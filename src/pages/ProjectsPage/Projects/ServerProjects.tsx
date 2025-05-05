import { useState } from "react";

import { P, LI, UL } from "@src/elements";
import { publicPaths } from "@src/publicPaths";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const Term4InfoSysAIProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Wrapped AI with a server (python, HTTP, RTMP)"
      achievements={
        <ProjectAchievements>
          <P>
            My team needed our AI to be able to communicate through the internet
            with users and a CCTV, so I wrapped our AI with{" "}
            <OnClick onClick={() => setSkip([0])}>nginx</OnClick> proxy server
            that <OnClick onClick={() => setSkip([1])}>feeds</OnClick> to a{" "}
            <OnClick onClick={() => setSkip([2])}>flask server</OnClick> housing
            the AI and starts a{" "}
            <OnClick onClick={() => setSkip([3])}>RTMP server</OnClick> that
            takes input from CCTV.
            <UL>
              <LI>
                <OnClick onClick={() => setSkip([4])}>Streamer</OnClick> object
                uses opencv and a secondary thread to always output latest frame
                from the stream at the RTMP server
              </LI>
              <LI>
                <OnClick onClick={() => setSkip([5])}>Tracker</OnClick> object
                builds the AI and uses cv2 to convert the frames to feed to the
                AI and uses its output to draw masks on the frame. The tracker
                uses request module to send out a HTTP request to another server
                when it is unable to generate masks.
              </LI>
              <LI>
                <OnClick onClick={() => setSkip([6])}>
                  RGBFramesToHLSProcess
                </OnClick>{" "}
                starts a FFmpeg process to take in the frames and automatically
                generate HLS live stream of 4 second segments.
              </LI>
              <LI>
                <OnClick onClick={() => setSkip([7])}>
                  nginx exposes hls endpoint
                </OnClick>{" "}
                to allow any player to consume the .m3u8 playlist
              </LI>
            </UL>
          </P>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          gitHubURL="https://github.com/Term-4-CSD-Team-48/ai-endpoint"
          docsURL="https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing"
        />
      }
      medias={
        <ProjectMedias
          mediasDir={publicPaths.projectsDir.term4InfosysAIDir.path}
          totalMedias={8}
          skip={skip}
        />
      }
    />
  );
};

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
                <OnClick onClick={() => setSkip([0])}>(MailService)</OnClick>
              </LI>
              <LI>
                Customized authentication process as we did not need login page
                and this is meant to be used as API{" "}
                <OnClick onClick={() => setSkip([1])}>
                  (SecurityConfiguration)
                </OnClick>
              </LI>
              <LI>
                Used MongoDB's SDK to connect to the database{" "}
                <OnClick onClick={() => setSkip([2])}>
                  (MongoClientConnection)
                </OnClick>
              </LI>
              <LI>
                Enforced data integrity and consistency by indexing the database{" "}
                <OnClick onClick={() => setSkip([3])}>(UserCollection)</OnClick>
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
      medias={
        <ProjectMedias
          mediasDir={publicPaths.projectsDir.term4InfosysAIDir.path}
          totalMedias={4}
          skip={skip}
        />
      }
    />
  );
};

export const ServerProjects = () => {
  return (
    <Projects>
      <Term4InfoSysAIProject />
      <Term4InfoSysAPIProject />
    </Projects>
  );
};
