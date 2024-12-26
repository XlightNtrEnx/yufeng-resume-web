import { Projects } from "./Projects";

const YufengResume = {
  name: "My resume",
  achievements:
    "Learnt how to build an interactive and mobile responsive website as well as how to deploy it.",
  gitHubLink: "https://github.com/XlightNtrEnx/yufeng-resume-web",
};

const projects = [YufengResume];

export const WebProjects = () => {
  return <Projects projects={projects} />;
};
