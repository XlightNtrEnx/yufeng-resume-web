import { Projects } from "./Projects";

const CatDogClassifier = {
  name: "Cat Dog Classifier",
  achievements:
    "Built a CNN from scratch, achieving 90% training and validation accuracy on kagglehub datasets.",
  gitHubLink: "https://github.com/XlightNtrEnx/cnn_builder",
};

const projects = [CatDogClassifier];

export const AIProjects = () => {
  return <Projects projects={projects} />;
};
