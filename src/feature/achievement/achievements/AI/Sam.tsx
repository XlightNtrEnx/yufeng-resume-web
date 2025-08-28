import { lazy } from "react";

import {
  term4CSDParcelEyeAIRepo,
  term4CSDParcelEyeDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const samDescription = `
Wrapped a python flask server with nginx proxy around SAM2.1 by Meta to allow users to {track an object}(ocs1) on a camera and receive push notifications (notification delay is smaller than camera stream latency) if it becomes untrackable

Used it out of the box without any transfer learning or training
`;

const LazyParcelEye = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const Sam = () => {
  return (
    <Achievement
      name="SAM2.1 Instance Segmentation (python)"
      LazyProject={LazyParcelEye}
      description={samDescription}
      urls={[term4CSDParcelEyeAIRepo, term4CSDParcelEyeDocs]}
      medias={[
        { src: paths.public.achievementDir.samDir.png_1 },
        { src: paths.public.achievementDir.samDir.mp4_2, isVideo: true },
      ]}
    />
  );
};
