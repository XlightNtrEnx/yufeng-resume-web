import { paths } from "@src/router";

import { Opencert } from "./Opencert";

export const OLevelOpencert = () => {
  const filenames = [
    paths.public.filesDir.educationMilestonesDir.olevelDir.opencertsDir.main,
    paths.public.filesDir.educationMilestonesDir.olevelDir.opencertsDir.chinese,
  ];

  return (
    <Opencert
      certsDir={
        paths.public.filesDir.educationMilestonesDir.olevelDir.opencertsDir.path
      }
      filenames={filenames}
    ></Opencert>
  );
};
