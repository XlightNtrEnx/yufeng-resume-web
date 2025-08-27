import { paths } from "@src/router/paths";

import { term4CSDFPGADocs, term4CSDFPGARepo } from "@src/common/strings";
import { Project } from "./project-components/Project";
import { AchievementsLayout } from "@src/features/achievement/achievements/achievement-components/AchievementsLayout";
import { FPGA } from "@src/features/achievement/achievements/EE/FPGAProject";

const HighLowDescription = `
A hardware project using a custom programmed FPGA as a brain to control LEDs and receive inputs from buttons. Transistors, resistors, breadboards, and logic gates were used.
- {Deployment diagram}(ocs0)
- {Components}(ocs1)
- {Front view}(ocs2)
`;

export const HighLow = () => {
  return (
    <Project
      name="HighLow"
      Achievements={() => (
        <AchievementsLayout>
          <FPGA />
        </AchievementsLayout>
      )}
      description={HighLowDescription}
      urls={[term4CSDFPGARepo, term4CSDFPGADocs]}
      mediasDir={paths.public.projectDir.highLowDir.path}
      mediasDirSize={3}
    />
  );
};
