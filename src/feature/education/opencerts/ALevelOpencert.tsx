import { paths } from "@src/router/paths";

import { Opencert } from "./Opencert";

export const ALevelOpencert = () => {
  return (
    <Opencert
      hrefs={[
        paths.public.educationDir.educationMilestonesDir.alevelDir.opencertsDir
          .main,
        paths.public.educationDir.educationMilestonesDir.alevelDir.opencertsDir
          .pw,
      ]}
    ></Opencert>
  );
};
