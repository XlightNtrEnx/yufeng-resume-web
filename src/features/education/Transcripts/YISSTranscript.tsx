import { paths } from "@src/router/paths";

import { Transcript } from "./Transcript";

export const YISSTranscript = () => {
  return (
    <Transcript
      dir={
        paths.public.filesDir.educationMilestonesDir.yissDir.transcriptsDir.path
      }
      filenames={[
        paths.public.filesDir.educationMilestonesDir.yissDir.transcriptsDir
          .main,
        paths.public.filesDir.educationMilestonesDir.yissDir.transcriptsDir
          .certificate,
      ]}
    />
  );
};
