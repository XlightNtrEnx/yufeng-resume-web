import { Opencert } from "./Opencert";
import { publicPaths } from "@src/publicPaths";

export const PSLEOpencert = () => {
  const filenames = [
    publicPaths.filesDir.educationMilestonesDir.psleDir.opencertsDir.main,
  ];

  return (
    <Opencert
      certsDir={
        publicPaths.filesDir.educationMilestonesDir.psleDir.opencertsDir.path
      }
      filenames={filenames}
    ></Opencert>
  );
};
