import { AchievementsLayout } from "@src/feature/achievement/achievements/achievement-components/AchievementsLayout";

import { Term4InfoSysAI } from "./Term4InfoSysAI";
import { Term4InfoSysAPI } from "./Term4InfoSysAPI";
import { Ascenda } from "./Ascenda";

export const Server = () => {
  return (
    <AchievementsLayout>
      <Ascenda />
      <Term4InfoSysAI />
      <Term4InfoSysAPI />
    </AchievementsLayout>
  );
};
