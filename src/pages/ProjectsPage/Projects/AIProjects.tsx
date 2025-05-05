import { useState } from "react";

import { LI, P, UL } from "@src/elements";
import { publicPaths } from "@src/publicPaths";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
  OnClick,
} from "./Project";
import { Projects } from "./Projects";

const SamProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="SAM2.1 Instance Segmentation (python)"
      achievements={
        <ProjectAchievements>
          <P>
            Wrapped a python flask server with nginx proxy around SAM2.1 by Meta
            to allow users to{" "}
            <OnClick onClick={() => setSkip([1])}>track an object</OnClick> on a
            camera and receive push notifications (notification delay is smaller
            than camera stream latency) if it becomes untrackable
          </P>
          <P>
            Used it out of the box without any transfer learning or training
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
          mediasDir={publicPaths.projectsDir.samDir.path}
          skip={skip}
          totalMedias={2}
          nonPNGMedias={{ 2: ".mp4" }}
        />
      }
    />
  );
};

const CatDogProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Cat Dog Classifier (python)"
      achievements={
        <ProjectAchievements>
          <P>
            Built a CNN from scratch in pytorch, achieving{" "}
            <OnClick onClick={() => setSkip([0])}>95%</OnClick> training and
            validation accuracy on kagglehub datasets.
          </P>
          <P>
            Incorporated concepts from various proven models like ResNet and VGG
          </P>
          <UL>
            <LI>
              <OnClick onClick={() => setSkip([2])}>Residual</OnClick>{" "}
              connections that significantly combats vanishing gradients in deep
              networks
            </LI>
            <LI>
              <OnClick onClick={() => setSkip([4])}>Hierachical</OnClick>{" "}
              feature extraction through successive conv layers of increasing
              feature size and decreasing image dimensions
            </LI>
            <LI>
              Extensive use of{" "}
              <OnClick onClick={() => setSkip([1])}>
                batch normalization
              </OnClick>{" "}
              after conv layers to stabilize training
            </LI>
            <LI>
              <OnClick onClick={() => setSkip([1])}>Dropout layers</OnClick>{" "}
              with dataset transformations to prevent overfitting
            </LI>
            <LI>
              <OnClick onClick={() => setSkip([4])}>Multiple FC layers</OnClick>{" "}
              of decreasing size at the end for gradual reductions to learn more
              about nuances and increasingly abstract features
            </LI>
          </UL>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks colabURL="https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing" />
      }
      medias={
        <ProjectMedias
          mediasDir={publicPaths.projectsDir.catDogClassfierDir.path}
          skip={skip}
          totalMedias={6}
        />
      }
    />
  );
};

export const AIProjects = () => {
  return (
    <Projects>
      <SamProject />
      <CatDogProject />
    </Projects>
  );
};
