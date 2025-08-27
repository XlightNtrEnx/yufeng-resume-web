import { paths } from "@src/router/paths";

import { Opencert } from "./Opencert";

export const ALevelOpencert = () => {
  const filenames = [
    paths.public.filesDir.educationMilestonesDir.alevelDir.opencertsDir.main,
    paths.public.filesDir.educationMilestonesDir.alevelDir.opencertsDir.pw,
  ];

  return (
    <Opencert
      certsDir={
        paths.public.filesDir.educationMilestonesDir.alevelDir.opencertsDir.path
      }
      filenames={filenames}
    ></Opencert>
  );
};
