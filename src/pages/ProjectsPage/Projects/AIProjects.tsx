import { useState } from "react";

import cd1 from "@src/assets/images/projects/cat-dog-classifier/1.png";
import cd2 from "@src/assets/images/projects/cat-dog-classifier/2.png";
import cd3 from "@src/assets/images/projects/cat-dog-classifier/3.png";
import cd4 from "@src/assets/images/projects/cat-dog-classifier/4.png";
import cd5 from "@src/assets/images/projects/cat-dog-classifier/5.png";
import cd6 from "@src/assets/images/projects/cat-dog-classifier/6.png";
import sam1 from "@src/assets/images/projects/sam/1.png";
import sam2 from "@src/assets/videos/projects/sam/2.mp4";
import { SpanOnClick } from "@src/components";
import { LI, P, UL } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
} from "./Project";
import { Projects } from "./Projects";

const samMedias = [sam1, sam2];
const SamProject = () => {
  return (
    <Project
      name="SAM2.1 Instance Segmentation"
      achievements={
        <ProjectAchievements>
          <P>
            Wrapped a python flask server with nginx proxy around SAM2.1 by Meta
            to allow users to track an object on a camera and receive push
            notifications if it becomes untrackable
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
      medias={<ProjectMedias medias={samMedias} />}
    />
  );
};

const catDogMedias = [cd1, cd2, cd3, cd4, cd5, cd6];
const CatDogProject = () => {
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <Project
      name="Cat Dog Classifier"
      achievements={
        <ProjectAchievements>
          <P>
            Built a CNN from scratch in pytorch, achieving{" "}
            <SpanOnClick onClick={() => setSkip([0])}>95%</SpanOnClick> training
            and validation accuracy on kagglehub datasets.
          </P>
          <P>
            Incorporated concepts from various proven models like ResNet and VGG
          </P>
          <UL>
            <LI>
              <SpanOnClick onClick={() => setSkip([2])}>Residual</SpanOnClick>{" "}
              connections that significantly combats vanishing gradients in deep
              networks
            </LI>
            <LI>
              <SpanOnClick onClick={() => setSkip([4])}>
                Hierachical
              </SpanOnClick>{" "}
              feature extraction through successive conv layers of increasing
              feature size and decreasing image dimensions
            </LI>
            <LI>
              Extensive use of{" "}
              <SpanOnClick onClick={() => setSkip([1])}>
                batch normalization
              </SpanOnClick>{" "}
              after conv layers to stabilize training
            </LI>
            <LI>
              <SpanOnClick onClick={() => setSkip([1])}>
                Dropout layers
              </SpanOnClick>{" "}
              with dataset transformations to prevent overfitting
            </LI>
            <LI>
              <SpanOnClick onClick={() => setSkip([4])}>
                Multiple FC layers
              </SpanOnClick>{" "}
              of decreasing size at the end for gradual reductions to learn more
              about nuances and increasingly abstract features
            </LI>
          </UL>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks colabURL="https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing" />
      }
      medias={<ProjectMedias medias={catDogMedias} skip={skip} />}
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
