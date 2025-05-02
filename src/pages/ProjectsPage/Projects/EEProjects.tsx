import media1 from "@src/assets/images/projects/FPGA-integration-with-electrical-components/1.jpg";
import media2 from "@src/assets/images/projects/FPGA-integration-with-electrical-components/2.jpg";
import media3 from "@src/assets/images/projects/FPGA-integration-with-electrical-components/3.png";

import { ProjectProps } from "./Project";
import { Projects } from "./Projects";

const projects: ProjectProps[] = [
  {
    name: "FPGA integration with electrical components",
    achievements: `Solved various problems from optimization to bugs for my team
    \nOur FPGA controlled 6 7-SEG displays and I made sure that there wasn't excessive current flow by creating code that cycles through all displays rapidly to give the illusion that all lit up at same time (Fig 3).
    \nWe needed our FPGA to be able to control the digits on the displays with 6V but it can only output 3.3V signals so I researched and used PNPBJT for our case to pull up the voltage. 
    \nWe were on a tight time constraint due to poor contribution from a teammate so in place of soldering I used Blu Tack to connect the wires together.
    `,
    docsURL:
      "https://docs.google.com/document/d/1xT4Ld5C4ehcu58D_iACf60CvPlZuexpL5UIkwBZg7sU/edit?usp=sharing",
    gitHubURL: "https://github.com/Term-4-CSD-Team-48/fpga-game",
    medias: [media1, media2, media3],
  },
];

export const EEProjects = () => {
  return <Projects projects={projects} />;
};
