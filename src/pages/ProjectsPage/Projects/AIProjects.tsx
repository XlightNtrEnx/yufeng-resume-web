import cd1 from "@src/assets/images/projects/cat-dog-classifier/1.png";
import cd2 from "@src/assets/images/projects/cat-dog-classifier/2.png";
import cd3 from "@src/assets/images/projects/cat-dog-classifier/3.png";
import cd4 from "@src/assets/images/projects/cat-dog-classifier/4.png";
import cd5 from "@src/assets/images/projects/cat-dog-classifier/5.png";
import cd6 from "@src/assets/images/projects/cat-dog-classifier/6.png";

import { LI, P, UL } from "@src/elements";

import {
  Project,
  ProjectAchievements,
  ProjectLinks,
  ProjectMedias,
} from "./Project";
import { Projects } from "./Projects";

const samMedias = [cd1, cd2, cd3, cd4, cd5, cd6];
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
  return (
    <Project
      name="Cat Dog Classifier"
      achievements={
        <ProjectAchievements>
          <P>
            Built a CNN from scratch in pytorch, achieving 95% training and
            validation accuracy on kagglehub datasets.
          </P>
          <P>
            Incorporated concepts from various proven models like ResNet and VGG
          </P>
          <UL>
            <LI>
              Residual connections that significantly combats vanishing
              gradients in deep networks
            </LI>
            <LI>
              Hierachical feature extraction through successive conv layers of
              increasing feature size and decreasing image dimensions
            </LI>
            <LI>
              Extensive use of batch normalization after conv layers to
              stabilize training
            </LI>
            <LI>
              Dropout layers with dataset transformations to prevent overfitting
            </LI>
            <LI>
              Multiple FC layers of decreasing size at the end for gradual
              reductions to learn more about nuances and increasingly abstract
              features
            </LI>
          </UL>
        </ProjectAchievements>
      }
      links={
        <ProjectLinks colabURL="https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing" />
      }
      medias={<ProjectMedias medias={catDogMedias} />}
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
