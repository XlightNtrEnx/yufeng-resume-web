import cd1 from "@src/assets/images/projects/cat-dog-classifier/1.png";
import cd2 from "@src/assets/images/projects/cat-dog-classifier/2.png";
import cd3 from "@src/assets/images/projects/cat-dog-classifier/3.png";
import cd4 from "@src/assets/images/projects/cat-dog-classifier/4.png";
import cd5 from "@src/assets/images/projects/cat-dog-classifier/5.png";
import cd6 from "@src/assets/images/projects/cat-dog-classifier/6.png";

import { ProjectProps } from "./Project";
import { Projects } from "./Projects";

const projects: ProjectProps[] = [
  {
    name: "SAM2.1 Instance Segmentation",
    achievements: `Used SAM2.1 by Meta to allow users to track an object on a camera and receive push notifications if it becomes untrackable 
    \nUsed it out of the box without any transfer learning or training`,
    gitHubURL: "https://github.com/Term-4-CSD-Team-48/ai-endpoint",
    docsURL:
      "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
    medias: [cd1, cd2, cd3, cd4, cd5, cd6],
  },
  {
    name: "Cat Dog Classifier",
    achievements: `Built a CNN from scratch in pytorch, achieving 95% training and validation accuracy on kagglehub datasets.
    \nIncorporated concepts from various proven models like ResNet and VGG
    - Residual connections that significantly combats vanishing gradients in deep networks
    - Hierachical feature extraction through successive conv layers of increasing feature size and decreasing image dimensions
    - Extensive use of batch normalization after conv layers to stabilize training
    - Dropout layers with dataset transformations to prevent overfitting
    - Multiple FC layers of decreasing size at the end for gradual reductions to learn more about nuances and increasingly abstract features`,
    colabURL:
      "https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing",
    medias: [cd1, cd2, cd3, cd4, cd5, cd6],
  },
];

export const AIProjects = () => {
  return <Projects projects={projects} />;
};
