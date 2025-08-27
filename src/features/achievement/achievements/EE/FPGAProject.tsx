import { term4CSDFPGADocs, term4CSDFPGARepo } from "@src/common/strings";
import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { HighLow } from "@src/features/project/projects/HighLow";

const fpgaDescription = `
Solved various problems from optimization to bugs for my team

Our FPGA controlled 6 7-SEG displays and I made sure that there wasn't excessive current flow by creating {code that cycles}(ocs2) through all displays rapidly to give the illusion that all lit up at same time.

We needed our FPGA to be able to control the digits on the displays with 6V but it can only output 3.3V signals so I researched and used PNPBJT for our case to pull up the voltage.

We were on a tight time constraint due to poor contribution from a teammate so in place of soldering I used {Blu Tack}(ocs0) to connect the wires together.
`;

export const FPGA = () => {
  return (
    <Achievement
      name="FPGA integration with electrical components (lucid)"
      Project={() => <HighLow />}
      description={fpgaDescription}
      urls={[term4CSDFPGADocs, term4CSDFPGARepo]}
      mediasDir={
        paths.public.achievementDir.fpgaIntegrationWithElectricalComponentsDir
          .path
      }
      mediasDirSize={3}
    />
  );
};
