import { lazy } from "react";

import { resumeRepo } from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
Learnt 3D and animation techniques in HTML, CSS, and JS to make a {fun easter egg}(ocs3) (best to experience instead of viewing as video has low fps). 

Learnt how to build an interactive and mobile responsive website as well as how to deploy it automatically
- {React}(ocs0) (frontend)
- {Firebase}(ocs1) (backend + hosting)
- {Github actions}(ocs2) (CI/CD)
`;

const LazyResumeProject = lazy(
  () => import("@src/feature/project/projects/Resume")
);

export const Resume = () => {
  return (
    <Achievement
      name="Resume (typescript)"
      LazyProject={LazyResumeProject}
      description={description}
      urls={[resumeRepo]}
      medias={[
        { src: paths.public.achievementDir.webDir.resumeDir.img_1 },
        { src: paths.public.achievementDir.webDir.resumeDir.img_2 },
        { src: paths.public.achievementDir.webDir.resumeDir.img_3 },
        {
          src: paths.public.achievementDir.webDir.resumeDir.vid_4,
          isVideo: true,
        },
      ]}
    />
  );
};

export default Resume;
