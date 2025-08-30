import { lazy } from "react";

import { paths } from "@src/router/paths";
import { ascendaFinalReportDocs, term4CSDGitHubOrg } from "@src/common/string";

import { Project } from "./project-components/Project";

const AscendaDescription = `
A simple CRUD web app that books hotels backed by a monolithic API.
- {Demo}(ocs0)
- {Deployment diagram}(ocs1)
- {Railway overview}(ocs2)
- {Supabase overview}(ocs3)
`;

const LazyDatabaseAchievement = lazy(
  () => import("@src/feature/achievement/achievements/Database/Ascenda")
);

const LazyServerAchievement = lazy(
  () => import("@src/feature/achievement/achievements/Server/Ascenda")
);

const LazyDevOpsAchievement = lazy(
  () => import("@src/feature/achievement/achievements/DevOps/Ascenda")
);

const LazyArchitectureAchievement = lazy(
  () => import("@src/feature/achievement/achievements/Architecture/Ascenda")
);

export const Ascenda = () => {
  return (
    <Project
      name="Ascenda"
      lazyAchievements={[
        LazyServerAchievement,
        LazyDatabaseAchievement,
        LazyDevOpsAchievement,
        LazyArchitectureAchievement,
      ]}
      description={AscendaDescription}
      urls={[term4CSDGitHubOrg, ascendaFinalReportDocs]}
      medias={[
        { src: paths.public.projectDir.ascendaDir.mp4_1, isVideo: true },
        { src: paths.public.projectDir.ascendaDir.img_2 },
        { src: paths.public.projectDir.ascendaDir.img_3 },
        { src: paths.public.projectDir.ascendaDir.img_4 },
      ]}
    />
  );
};

export default Ascenda;
