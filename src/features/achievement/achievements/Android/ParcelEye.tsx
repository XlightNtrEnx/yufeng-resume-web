import {
  term4CSDParcelEyeDocs,
  term4CSDParcelEyeRepo,
} from "@src/common/strings";
import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { ParcelEye as ParcelEyeProject } from "@src/features/project/projects/ParcelEye";

const parcelEyeDescription = `
Video by Tok Jing Huan: [https://www.linkedin.com/in/jinghuan/](https://www.linkedin.com/in/jinghuan/)

Worked on the frontend to deliver features like
- HTTP communication capability {(ApiClient)}(ocs1)
- Push notifications {(MyFirebaseMessagingService)}(ocs2)
- Video player {(HLS consumption by PlayerViewModel)}(ocs3)
`;

export const ParcelEye = () => {
  return (
    <Achievement
      name="ParcelEye (java)"
      Project={() => <ParcelEyeProject />}
      description={parcelEyeDescription}
      urls={[term4CSDParcelEyeRepo, term4CSDParcelEyeDocs]}
      mediasDir={paths.public.achievementDir.parcelEyeDir.path}
      mediasDirSize={4}
      nonPNGMedias={{ 1: ".mp4" }}
    />
  );
};
