import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";

const samDescription = `
Wrapped a python flask server with nginx proxy around SAM2.1 by Meta to allow users to {track an object}(ocs1) on a camera and receive push notifications (notification delay is smaller than camera stream latency) if it becomes untrackable

Used it out of the box without any transfer learning or training
`;

export const Sam = () => {
  return (
    <Achievement
      name="SAM2.1 Instance Segmentation (python)"
      description={samDescription}
      urls={[
        "https://github.com/Term-4-CSD-Team-48/ai-endpoint",
        "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
      ]}
      mediasDir={paths.public.achievementDir.samDir.path}
      mediasDirSize={2}
      nonPNGMedias={{ 2: ".mp4" }}
    />
  );
};
