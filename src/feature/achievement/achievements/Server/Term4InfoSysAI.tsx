import { lazy } from "react";

import {
  term4CSDParcelEyeAIRepo,
  term4CSDParcelEyeDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
My team needed our AI to be able to communicate through the internet with users and a CCTV, so I wrapped our AI with {nginx}(ocs0) proxy server that {feeds}(ocs1) to a {flask server}(ocs2) housing the AI and starts a {RTMP server}(ocs3) that takes input from CCTV.
- {Streamer}(ocs4) object uses opencv and a secondary thread to always output latest frame from the stream at the RTMP server
- {Tracker}(ocs5) object builds the AI and uses cv2 to convert the frames to feed to the AI and uses its output to draw masks on the frame. The tracker uses request module to send out a HTTP request to another server when it is unable to generate masks.
- {RGBFramesToHLSProcess}(ocs6) starts a FFmpeg process to take in the frames and automatically generate HLS live stream of 4 second segments.
- {nginx exposes hls endpoint}(ocs7) to allow any player to consume the .m3u8 playlist
`;

const LazyParcelEyeProject = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const Term4InfoSysAI = () => {
  return (
    <Achievement
      name="Wrapped AI with a server (python, HTTP, RTMP)"
      LazyProject={LazyParcelEyeProject}
      description={description}
      urls={[term4CSDParcelEyeAIRepo, term4CSDParcelEyeDocs]}
      medias={[
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_1 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_2 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_3 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_4 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_5 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_6 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_7 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAIDir.png_8 },
      ]}
    />
  );
};

export default Term4InfoSysAI;
