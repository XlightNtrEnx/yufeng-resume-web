import media1 from "@src/assets/images/projects/web-resume/1.png";
import media2 from "@src/assets/images/projects/web-resume/2.png";
import media3 from "@src/assets/images/projects/web-resume/3.png";

import { ProjectProps } from "./Project";
import { Projects } from "./Projects";

const projects: ProjectProps[] = [
  {
    name: "Web resume",
    achievements: `Learnt how to build an interactive and mobile responsive website as well as how to deploy it.
    - React (frontend)
    - Firebase (backend + hosting) (Fig 2)
    - Github actions (CI/CD) (Fig 3)`,
    gitHubURL: "https://github.com/XlightNtrEnx/yufeng-resume-web",
    medias: [media1, media2, media3],
  },
];

export const WebProjects = () => {
  return <Projects projects={projects} />;
};
