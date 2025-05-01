import { publicPaths } from "@src/publicPaths";

import { Transcript } from "./Transcript";

export const YISSTranscript = () => {
  return (
    <Transcript
      dir={
        publicPaths.filesDir.educationMilestonesDir.yissDir.transcriptsDir.path
      }
      filenames={[
        publicPaths.filesDir.educationMilestonesDir.yissDir.transcriptsDir.main,
        publicPaths.filesDir.educationMilestonesDir.yissDir.transcriptsDir
          .certificate,
      ]}
    />
  );
};
