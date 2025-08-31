import { lazy } from "react";

import { resumeGitHub } from "@src/common/string";
import { paths } from "@src/router/paths";

import { Project } from "./project-components/Project";

const description = `
A single-page application (SPA) built for recruiters to easily navigate my portfolio.
- {Deployment diagram}(ocs0)
- {Folder structure}(ocs1)
`;

const ResumeWebAchievement = lazy(
  () => import("@src/feature/achievement/achievements/Web/Resume")
);
const ResumeScriptingAchievement = lazy(
  () => import("@src/feature/achievement/achievements/Scripting/Resume")
);
export const Resume = () => {
  return (
    <Project
      name="Resume"
      lazyAchievements={[ResumeScriptingAchievement, ResumeWebAchievement]}
      description={description}
      urls={[resumeGitHub]}
      medias={[
        { src: paths.public.projectDir.resumeDir.img_1 },
        { src: paths.public.projectDir.resumeDir.img_2 },
      ]}
    />
  );
};

export default Resume;
