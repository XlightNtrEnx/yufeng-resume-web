import { paths } from "@src/router/paths";

import { Transcript } from "./Transcript";

export const YISSTranscript = () => {
  return (
    <Transcript
      paths={[
        paths.public.educationDir.educationMilestonesDir.yissDir.transcriptsDir
          .main,
        paths.public.educationDir.educationMilestonesDir.yissDir.transcriptsDir
          .certificate,
      ]}
    />
  );
};
