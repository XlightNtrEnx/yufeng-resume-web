import { Projects, Project } from "./Projects";

const projects = [
  new Project({
    name: "Web resume",
    achievements:
      "Learnt how to build an interactive and mobile responsive website as well as how to deploy it.",
    gitHubURL: "https://github.com/XlightNtrEnx/yufeng-resume-web",
  }),
];

export const WebProjects = () => {
  return <Projects projects={projects} />;
};
