import { lazy } from "react";

import { term4CSDFPGADocs, term4CSDFPGARepo } from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const fpgaDescription = `
Solved various problems from optimization to bugs for my team

Our FPGA controlled 6 7-SEG displays and I made sure that there wasn't excessive current flow by creating {code that cycles}(ocs2) through all displays rapidly to give the illusion that all lit up at same time.

We needed our FPGA to be able to control the digits on the displays with 6V but it can only output 3.3V signals so I researched and used PNPBJT for our case to pull up the voltage.

We were on a tight time constraint due to poor contribution from a teammate so in place of soldering I used {Blu Tack}(ocs0) to connect the wires together.
`;

const LazyHighLowProject = lazy(
  () => import("@src/feature/project/projects/HighLow")
);

export const FPGA = () => {
  return (
    <Achievement
      name="FPGA integration with electrical components (lucid)"
      LazyProject={LazyHighLowProject}
      description={fpgaDescription}
      urls={[term4CSDFPGADocs, term4CSDFPGARepo]}
      medias={[
        {
          src: paths.public.achievementDir.eeDir
            .fpgaIntegrationWithElectricalComponentsDir.img_1,
        },
        {
          src: paths.public.achievementDir.eeDir
            .fpgaIntegrationWithElectricalComponentsDir.img_2,
        },
        {
          src: paths.public.achievementDir.eeDir
            .fpgaIntegrationWithElectricalComponentsDir.img_3,
        },
      ]}
    />
  );
};

export default FPGA;
