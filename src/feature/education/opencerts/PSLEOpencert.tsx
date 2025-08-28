import { paths } from "@src/router/paths";

import { Opencert } from "./Opencert";

export const PSLEOpencert = () => {
  return (
    <Opencert
      hrefs={[
        paths.public.educationDir.educationMilestonesDir.psleDir.opencertsDir
          .main,
      ]}
    ></Opencert>
  );
};
