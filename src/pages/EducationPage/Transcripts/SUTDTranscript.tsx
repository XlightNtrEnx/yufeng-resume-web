import { publicPaths } from "@src/publicPaths";
import { Transcript } from "./Transcript";

export const SUTDTranscript = () => {
  return (
    <Transcript
      dir={
        publicPaths.filesDir.educationMilestonesDir.sutdDir.transcriptsDir.path
      }
      filenames={[
        publicPaths.filesDir.educationMilestonesDir.sutdDir.transcriptsDir.main,
      ]}
    />
  );
};
