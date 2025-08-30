import { lazy } from "react";

import { paths } from "@src/router/paths";
import { term4CSDGitHubOrg, term4CSDParcelEyeDocs } from "@src/common/string";

import { Project } from "./project-components/Project";

const description = `
An AI-powered system designed to send push notifications to end user when the tracked parcel is not on screen anymore.
- {Video overview}(ocs0)
- {Deployment diagram}(ocs1)
- {A frame from HLS of AI tracking kinder bueno}(ocs2)
`;

const Term4InfoSysAICloudAchievement = lazy(
  () =>
    import("@src/feature/achievement/achievements/Cloud/Term4InfoSysAICloud")
);
const Term4InfoSysAIContainerization = lazy(
  () =>
    import(
      "@src/feature/achievement/achievements/Containerization/Term4InfoSysAIContainerization"
    )
);
const Term4InfoSysAIServer = lazy(
  () => import("@src/feature/achievement/achievements/Server/Term4InfoSysAI")
);
const Term4InfoSysAPIServer = lazy(
  () => import("@src/feature/achievement/achievements/Server/Term4InfoSysAPI")
);

export const ParcelEye = () => {
  return (
    <Project
      name="ParcelEye"
      lazyAchievements={[
        Term4InfoSysAICloudAchievement,
        Term4InfoSysAIContainerization,
        Term4InfoSysAIServer,
        Term4InfoSysAPIServer,
      ]}
      description={description}
      urls={[term4CSDGitHubOrg, term4CSDParcelEyeDocs]}
      medias={[
        { src: paths.public.projectDir.parcelEyeDir.vid_1, isVideo: true },
        { src: paths.public.projectDir.parcelEyeDir.img_2 },
        { src: paths.public.projectDir.parcelEyeDir.img_3 },
      ]}
    />
  );
};

export default ParcelEye;
