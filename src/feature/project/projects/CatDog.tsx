import { lazy } from "react";

import { paths } from "@src/router/paths";
import { term4CSDGitHubOrg } from "@src/common/string";

import { Project } from "./project-components";

const description = `
A binary CNN built from best practices of top models (VGG, ResNET) that achieved 95% training and validation accuracy on 16384 images (50% cat 50% dog)
- {Architecture}(ocs0)
- {ResNet Block}(ocs1)
- {Results}(ocs2)
`;

const LazyCatDogAchievement = lazy(
  () => import("@src/feature/achievement/achievements/AI/CatDog")
);

export const CatDog = () => {
  return (
    <Project
      name="CatDog"
      lazyAchievements={[LazyCatDogAchievement]}
      description={description}
      urls={[term4CSDGitHubOrg]}
      medias={[
        { src: paths.public.projectDir.catDogDir.png_1 },
        { src: paths.public.projectDir.catDogDir.png_2 },
        { src: paths.public.projectDir.catDogDir.png_3 },
      ]}
    />
  );
};

export default CatDog;
