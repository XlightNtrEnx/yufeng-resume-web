import { Projects } from "./Projects";

import media2 from "@src/assets/images/projects/cat-dog-classifier/1.png";
import media1 from "@src/assets/images/projects/cat-dog-classifier/2.png";

const CatDogClassifier = {
  name: "Cat Dog Classifier",
  achievements:
    "Built a CNN from scratch, achieving 95% training and validation accuracy on kagglehub datasets.",
  colabLink:
    "https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing",

  medias: [media1, media2],
};

const projects = [CatDogClassifier];

export const AIProjects = () => {
  return <Projects projects={projects} />;
};
