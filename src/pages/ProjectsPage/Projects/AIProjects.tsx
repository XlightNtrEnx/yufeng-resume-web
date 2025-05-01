import { Projects, Project } from "./Projects";

import media1 from "@src/assets/images/projects/cat-dog-classifier/1.png";
import media2 from "@src/assets/images/projects/cat-dog-classifier/2.png";
import media3 from "@src/assets/images/projects/cat-dog-classifier/3.png";
import media4 from "@src/assets/images/projects/cat-dog-classifier/4.png";
import media5 from "@src/assets/images/projects/cat-dog-classifier/5.png";
import media6 from "@src/assets/images/projects/cat-dog-classifier/6.png";

const projects = [
  new Project({
    name: "Cat Dog Classifier",
    achievements: `Built a CNN from scratch in pytorch, achieving 95% training and validation accuracy on kagglehub datasets.
    \nIncorporated concepts from various proven models like ResNet and VGG
    - Residual connections that significantly combats vanishing gradients in deep networks
    - Hierachical feature extraction through successive conv layers of incresaing feature size and decreasing image dimensions
    - Extensive use of batch normalization after conv layers to stabilize training
    - Dropout layers with dataset transformations to prevent overfitting
    - Multiple FC layers of decreasing size at the end for gradual reductions to learn more about nuances and increasingly abstract features`,
    colabURL:
      "https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing",

    medias: [media1, media2, media3, media4, media5, media6],
  }),
];

export const AIProjects = () => {
  return <Projects projects={projects} />;
};
