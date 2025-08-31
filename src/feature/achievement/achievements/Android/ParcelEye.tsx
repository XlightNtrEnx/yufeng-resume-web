import { lazy } from "react";

import {
  term4CSDParcelEyeDocs,
  term4CSDParcelEyeRepo,
  jingHuanLinkedIn,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const parcelEyeDescription = `
Video by Tok Jing Huan: [${jingHuanLinkedIn}](${jingHuanLinkedIn})

Worked on the frontend to deliver features like
- HTTP communication capability {(ApiClient)}(ocs1)
- Push notifications {(MyFirebaseMessagingService)}(ocs2)
- Video player {(HLS consumption by PlayerViewModel)}(ocs3)
`;

const LazyParcelEyeProject = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const ParcelEye = () => {
  return (
    <Achievement
      name="ParcelEye (java)"
      LazyProject={LazyParcelEyeProject}
      description={parcelEyeDescription}
      urls={[term4CSDParcelEyeRepo, term4CSDParcelEyeDocs]}
      medias={[
        {
          src: paths.public.achievementDir.androidDir.parcelEyeDir.vid_1,
          isVideo: true,
        },
        { src: paths.public.achievementDir.androidDir.parcelEyeDir.img_2 },
        { src: paths.public.achievementDir.androidDir.parcelEyeDir.img_3 },
        { src: paths.public.achievementDir.androidDir.parcelEyeDir.img_4 },
      ]}
    />
  );
};
