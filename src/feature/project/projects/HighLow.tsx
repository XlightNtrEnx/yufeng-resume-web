import { lazy } from "react";

import { paths } from "@src/router/paths";
import { term4CSDFPGADocs, term4CSDFPGARepo } from "@src/common/string";

import { Project } from "./project-components";

const description = `
A hardware project using a custom programmed FPGA as a brain to control LEDs and receive inputs from buttons. Transistors, resistors, breadboards, and logic gates were used.
- {Deployment diagram}(ocs0)
- {Components}(ocs1)
- {Front view}(ocs2)
`;

const LazyFPGA = lazy(
  () => import("@src/feature/achievement/achievements/EE/FPGA")
);

export const HighLow = () => {
  return (
    <Project
      name="HighLow"
      achievementIds={[LazyFPGA]}
      description={description}
      urls={[term4CSDFPGARepo, term4CSDFPGADocs]}
      medias={[
        { src: paths.public.projectDir.highLowDir.img_1 },
        { src: paths.public.projectDir.highLowDir.img_2 },
        { src: paths.public.projectDir.highLowDir.img_3 },
      ]}
    />
  );
};

export default HighLow;
