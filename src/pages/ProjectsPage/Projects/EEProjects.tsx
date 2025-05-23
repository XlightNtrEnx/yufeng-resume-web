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

const FPGAProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="FPGA integration with electrical components (lucid)"
      achievements={
        <ProjectAchievements>
          <P>Solved various problems from optimization to bugs for my team</P>
          <P>
            Our FPGA controlled 6 7-SEG displays and I made sure that there
            wasn't excessive current flow by creating{" "}
            <OnClick onClick={() => setSkip([2])}>code that cycles</OnClick>{" "}
            through all displays rapidly to give the illusion that all lit up at
            same time.
          </P>
          <P>
            We needed our FPGA to be able to control the digits on the displays
            with 6V but it can only output 3.3V signals so I researched and used
            PNPBJT for our case to pull up the voltage.
          </P>
          <P>
            We were on a tight time constraint due to poor contribution from a
            teammate so in place of soldering I used{" "}
            <OnClick onClick={() => setSkip([0])}>Blu Tack</OnClick> to connect
            the wires together.
          </P>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks
          docsURL="https://docs.google.com/document/d/1xT4Ld5C4ehcu58D_iACf60CvPlZuexpL5UIkwBZg7sU/edit?usp=sharing"
          gitHubURL="https://github.com/Term-4-CSD-Team-48/fpga-game"
        />
      }
      medias={
        <ProjectMedias
          mediasDir={
            paths.public.projectsDir.fpgaIntegrationWithElectricalComponentsDir
              .path
          }
          totalMedias={3}
          skip={skip}
        />
      }
    />
  );
};

export const EEProjects = () => {
  return (
    <Projects>
      <FPGAProject />
    </Projects>
  );
};
