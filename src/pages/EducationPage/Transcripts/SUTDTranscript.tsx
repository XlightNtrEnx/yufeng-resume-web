import { paths } from "@src/router";

import { Transcript } from "./Transcript";

export const SUTDTranscript = () => {
  return (
    <Transcript
      dir={
        paths.public.filesDir.educationMilestonesDir.sutdDir.transcriptsDir.path
      }
      filenames={[
        paths.public.filesDir.educationMilestonesDir.sutdDir.transcriptsDir
          .main,
      ]}
    />
  );
};
