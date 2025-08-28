import { paths } from "@src/router/paths";

import { Opencert } from "./Opencert";

export const OLevelOpencert = () => {
  return (
    <Opencert
      hrefs={[
        paths.public.educationDir.educationMilestonesDir.olevelDir.opencertsDir
          .main,
        paths.public.educationDir.educationMilestonesDir.olevelDir.opencertsDir
          .chinese,
      ]}
    ></Opencert>
  );
};
