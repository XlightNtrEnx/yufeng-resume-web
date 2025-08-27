import { AchievementsLayout } from "@src/features/achievement/achievements/achievement-components/AchievementsLayout";

import { Mongo } from "./Mongo";

export const Database = () => {
  return (
    <AchievementsLayout>
      <Mongo />
    </AchievementsLayout>
  );
};
