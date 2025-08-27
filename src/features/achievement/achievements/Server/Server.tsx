import { AchievementsLayout } from "@src/features/achievement/achievements/achievement-components/AchievementsLayout";

import { Term4InfoSysAIProject } from "./Term4InfoSysAIProject";
import { Term4InfoSysAPIProject } from "./Term4InfoSysAPIProject";

export const Server = () => {
  return (
    <AchievementsLayout>
      <Term4InfoSysAIProject />
      <Term4InfoSysAPIProject />
    </AchievementsLayout>
  );
};
