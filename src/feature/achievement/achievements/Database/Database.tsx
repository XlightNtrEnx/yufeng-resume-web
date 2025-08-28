import { AchievementsLayout } from "@src/feature/achievement/achievements/achievement-components/AchievementsLayout";

import { Mongo } from "./Mongo";
import { Ascenda } from "./Ascenda";

export const Database = () => {
  return (
    <AchievementsLayout>
      <Ascenda />
      <Mongo />
    </AchievementsLayout>
  );
};
