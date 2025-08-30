import { lazy } from "react";

import {
  term4CSDParcelEyeDocs,
  term4CSDParcelEyeAIRepo,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const term4InfoSysAIContainerizationDescription = `
For submission to my university, it was required that the code be runnable. Unfortunately it is only runnable on linux and I doubted that my professors would use linux. As such I containerized my AI server.

It was initially 32GB compressed but I got it down to slightly under {5GB}(ocs0) using {multi-stage builds}(ocs1)

Abused {github actions CI/CD}(ocs5) so I don't need to waste my CPU to build images
`;

const LazyParcelEyeProject = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const Term4InfoSysAIContainerization = () => {
  return (
    <Achievement
      name="Containerization for my project submission"
      LazyProject={LazyParcelEyeProject}
      description={term4InfoSysAIContainerizationDescription}
      urls={[term4CSDParcelEyeAIRepo, term4CSDParcelEyeDocs]}
      medias={[
        {
          src: paths.public.achievementDir.term4InfosysAIContainerizationDir
            .img_1,
        },
        {
          src: paths.public.achievementDir.term4InfosysAIContainerizationDir
            .img_2,
        },
        {
          src: paths.public.achievementDir.term4InfosysAIContainerizationDir
            .img_3,
        },
        {
          src: paths.public.achievementDir.term4InfosysAIContainerizationDir
            .img_4,
        },
        {
          src: paths.public.achievementDir.term4InfosysAIContainerizationDir
            .img_5,
        },
        {
          src: paths.public.achievementDir.term4InfosysAIContainerizationDir
            .img_6,
        },
      ]}
    />
  );
};

export default Term4InfoSysAIContainerization;
