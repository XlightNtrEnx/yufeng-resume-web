import { AchievementsLayout } from "@src/feature/achievement/achievements/achievement-components/AchievementsLayout";

import { CatDog } from "./CatDog";
import { Sam } from "./Sam";

export const AI = () => {
  return (
    <AchievementsLayout>
      <Sam />
      <CatDog />
    </AchievementsLayout>
  );
};
