import { lazy } from "react";

import { resumeRepo } from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
Made a {script}(ocs1) that utilizes FFmpeg to loop through each image and convert to .webp if the final size is smaller. 
This reduced the total size of important images from {53.5mB to 41.5mB}(ocs0).
`;

const LazyResumeProject = lazy(
  () => import("@src/feature/project/projects/Resume")
);

export const Resume = () => {
  return (
    <Achievement
      name="Optimizing space for resume website"
      LazyProject={LazyResumeProject}
      description={description}
      urls={[resumeRepo]}
      medias={[
        { src: paths.public.achievementDir.scriptingDir.resumeDir.img_1 },
        { src: paths.public.achievementDir.scriptingDir.resumeDir.img_2 },
      ]}
    />
  );
};

export default Resume;
