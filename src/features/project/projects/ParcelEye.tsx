import { paths } from "@src/router/paths";

import { term4CSDGitHubOrg, term4CSDParcelEyeDocs } from "@src/common/strings";
import { Project } from "./project-components/Project";

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
      description={ParcelEyeDescription}
      urls={[term4CSDGitHubOrg, term4CSDParcelEyeDocs]}
      mediasDir={paths.public.projectDir.parcelEyeDir.path}
      mediasDirSize={3}
      nonPNGMedias={{ 1: ".mp4" }}
    />
  );
};
