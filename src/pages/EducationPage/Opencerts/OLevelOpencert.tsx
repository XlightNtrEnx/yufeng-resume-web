import { Opencert } from "./Opencert";
import { publicPaths } from "@src/publicPaths";

export const OLevelOpencert = () => {
  const filenames = [
    publicPaths.filesDir.educationMilestonesDir.olevelDir.opencertsDir.main,
    publicPaths.filesDir.educationMilestonesDir.olevelDir.opencertsDir.chinese,
  ];

  return (
    <Opencert
      certsDir={
        publicPaths.filesDir.educationMilestonesDir.olevelDir.opencertsDir.path
      }
      filenames={filenames}
    ></Opencert>
  );
};
