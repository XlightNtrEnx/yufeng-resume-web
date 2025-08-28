import { lazy } from "react";

import { resumeGitHub } from "@src/common/string";
import { paths } from "@src/router/paths";

import { Project } from "./project-components/Project";

const description = `
A single-page application (SPA) built for recruiters to easily navigate my portfolio.
- {Deployment diagram}(ocs0)
- {Folder structure}(ocs1)
`;

const ResumeAchievement = lazy(
  () => import("@src/feature/achievement/achievements/Web/Resume")
);

export const Resume = () => {
  return (
    <Project
      name="Resume"
      lazyAchievements={[ResumeAchievement]}
      description={description}
      urls={[resumeGitHub]}
      medias={[
        { src: paths.public.projectDir.resumeDir.png_1 },
        { src: paths.public.projectDir.resumeDir.png_2 },
      ]}
    />
  );
};

export default Resume;
