import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { ParcelEye } from "@src/features/project/projects/ParcelEye";

const description = `
My team needed our AI to be able to communicate through the internet with users and a CCTV, so I wrapped our AI with {nginx}(ocs0) proxy server that {feeds}(ocs1) to a {flask server}(ocs2) housing the AI and starts a {RTMP server}(ocs3) that takes input from CCTV.
- {Streamer}(ocs4) object uses opencv and a secondary thread to always output latest frame from the stream at the RTMP server
- {Tracker}(ocs5) object builds the AI and uses cv2 to convert the frames to feed to the AI and uses its output to draw masks on the frame. The tracker uses request module to send out a HTTP request to another server when it is unable to generate masks.
- {RGBFramesToHLSProcess}(ocs6) starts a FFmpeg process to take in the frames and automatically generate HLS live stream of 4 second segments.
- {nginx exposes hls endpoint}(ocs7) to allow any player to consume the .m3u8 playlist
`;

export const Term4InfoSysAIProject = () => {
  return (
    <Achievement
      name="Wrapped AI with a server (python, HTTP, RTMP)"
      Project={() => <ParcelEye />}
      description={description}
      urls={[
        "https://github.com/Term-4-CSD-Team-48/ai-endpoint",
        "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
      ]}
      mediasDir={paths.public.achievementDir.term4InfosysAIDir.path}
      mediasDirSize={8}
    />
  );
};
