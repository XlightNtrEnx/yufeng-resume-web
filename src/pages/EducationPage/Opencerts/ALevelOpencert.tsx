import { Opencert } from "./Opencert";
import { publicPaths } from "@src/publicPaths";

export const ALevelOpencert = () => {
  const filenames = [
    publicPaths.filesDir.educationMilestonesDir.alevelDir.opencertsDir.main,
    publicPaths.filesDir.educationMilestonesDir.alevelDir.opencertsDir.pw,
  ];

  return (
    <Opencert
      certsDir={
        publicPaths.filesDir.educationMilestonesDir.alevelDir.opencertsDir.path
      }
      filenames={filenames}
    ></Opencert>
  );
};
