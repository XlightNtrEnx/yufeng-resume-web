import { paths } from "@src/router";

import { Opencert } from "./Opencert";

export const PSLEOpencert = () => {
  const filenames = [
    paths.public.filesDir.educationMilestonesDir.psleDir.opencertsDir.main,
  ];

  return (
    <Opencert
      certsDir={
        paths.public.filesDir.educationMilestonesDir.psleDir.opencertsDir.path
      }
      filenames={filenames}
    ></Opencert>
  );
};
