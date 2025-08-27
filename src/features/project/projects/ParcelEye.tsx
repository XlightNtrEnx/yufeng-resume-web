import { paths } from "@src/router/paths";

import { term4CSDGitHubOrg, term4CSDParcelEyeDocs } from "@src/common/strings";
import { Project } from "./project-components/Project";
import { AchievementsLayout } from "@src/features/achievement/achievements/achievement-components/AchievementsLayout";
import { Term4InfoSysAICloudAchievement } from "@src/features/achievement/achievements/Cloud/Term4InfoSysAICloudProject";
import { Term4InfoSysAIContainerizationProject } from "@src/features/achievement/achievements/Containerization/Term4InfoSysAIContainerizationProject";
import { Term4InfoSysAIProject } from "@src/features/achievement/achievements/Server/Term4InfoSysAIProject";
import { Term4InfoSysAPIProject } from "@src/features/achievement/achievements/Server/Term4InfoSysAPIProject";

const ParcelEyeDescription = `
An AI-powered system designed to send push notifications to end user when the tracked parcel is not on screen anymore.
- {Video overview}(ocs0)
- {Deployment diagram}(ocs1)
- {A frame from HLS of AI tracking kinder bueno}(ocs2)
`;

export const ParcelEye = () => {
  return (
    <Project
      name="ParcelEye"
      Achievements={() => (
        <AchievementsLayout>
          <Term4InfoSysAICloudAchievement />
          <Term4InfoSysAIContainerizationProject />
          <Term4InfoSysAIProject />
          <Term4InfoSysAPIProject />
        </AchievementsLayout>
      )}
      description={ParcelEyeDescription}
      urls={[term4CSDGitHubOrg, term4CSDParcelEyeDocs]}
      mediasDir={paths.public.projectDir.parcelEyeDir.path}
      mediasDirSize={3}
      nonPNGMedias={{ 1: ".mp4" }}
    />
  );
};
