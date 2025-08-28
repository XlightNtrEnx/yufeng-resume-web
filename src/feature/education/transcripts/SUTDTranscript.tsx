import { paths } from "@src/router/paths";

import { Transcript } from "./Transcript";

export const SUTDTranscript = () => {
  return (
    <Transcript
      paths={[
        paths.public.educationDir.educationMilestonesDir.sutdDir.transcriptsDir
          .main,
      ]}
    />
  );
};
