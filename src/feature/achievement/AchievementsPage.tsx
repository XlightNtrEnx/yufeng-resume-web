import { lazy, Suspense, useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";
import { paths } from "@src/router/paths";

import { PreviewCard, PreviewCardProps } from "./PreviewCard";
import { AchievementsLayout } from "./achievements/achievement-components/AchievementsLayout";
import { APIServiceContext } from "@src/provider/APIServiceProvider";

const AI = lazy(() => import("@src/feature/achievement/achievements/AI"));
const Android = lazy(
  () => import("@src/feature/achievement/achievements/Android")
);
const Architecture = lazy(
  () => import("@src/feature/achievement/achievements/Architecture")
);
const Cloud = lazy(() => import("@src/feature/achievement/achievements/Cloud"));
const Containerization = lazy(
  () => import("@src/feature/achievement/achievements/Containerization")
);
const Database = lazy(
  () => import("@src/feature/achievement/achievements/Database")
);
const DataScience = lazy(
  () => import("@src/feature/achievement/achievements/DataScience")
);
const DevOps = lazy(
  () => import("@src/feature/achievement/achievements/DevOps")
);
const EE = lazy(() => import("@src/feature/achievement/achievements/EE"));
const Scripting = lazy(
  () => import("@src/feature/achievement/achievements/Scripting")
);
const Server = lazy(
  () => import("@src/feature/achievement/achievements/Server")
);
const Web = lazy(() => import("@src/feature/achievement/achievements/Web"));
const Signal = lazy(
  () => import("@src/feature/achievement/achievements/Signal")
);

const previewCardData: (Omit<PreviewCardProps, "onClick"> & {
  ActualElement: React.LazyExoticComponent<
    () => React.ReactElement<typeof AchievementsLayout>
  >;
})[] = [
  {
    title: "AI",
    src: paths.public.achievementDir.aiDir.preview,
    ActualElement: AI,
  },
  {
    title: "Android",
    src: paths.public.achievementDir.androidDir.preview,
    ActualElement: Android,
  },
  {
    title: "Architecture",
    src: paths.public.achievementDir.architectureDir.preview,
    ActualElement: Architecture,
  },
  {
    title: "Cloud computing",
    src: paths.public.achievementDir.cloudDir.preview,
    ActualElement: Cloud,
  },
  {
    title: "Containerization",
    src: paths.public.achievementDir.dockerDir.preview,
    ActualElement: Containerization,
  },
  {
    title: "Database",
    src: paths.public.achievementDir.databaseDir.preview,
    ActualElement: Database,
  },
  {
    title: "Data Science",
    src: paths.public.achievementDir.dataScienceDir.preview,
    ActualElement: DataScience,
  },
  {
    title: "DevOps",
    src: paths.public.achievementDir.devOpsDir.preview,
    ActualElement: DevOps,
  },
  {
    title: "Elec. Eng",
    src: paths.public.achievementDir.eeDir.preview,
    ActualElement: EE,
  },
  {
    title: "Scripting",
    src: paths.public.achievementDir.scriptingDir.preview,
    ActualElement: Scripting,
  },
  {
    title: "Server",
    src: paths.public.achievementDir.serverDir.preview,
    ActualElement: Server,
  },
  {
    title: "Signal",
    src: paths.public.achievementDir.signalDir.preview,
    ActualElement: Signal,
  },
  {
    title: "Web",
    src: paths.public.achievementDir.webDir.preview,
    ActualElement: Web,
  },
];
const previewCardTitleToIdx = new Map<string, number>();
for (let i = 0; i < previewCardData.length; i++)
  previewCardTitleToIdx.set(previewCardData[i].title, i);

const achievementParam = "achievement";

export const AchievementsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // PC for PreviewCard
  const [activePCIdx, setActivePCIdx] = useState<number | null>(
    previewCardTitleToIdx.get(searchParams.get(achievementParam) || "") ?? null
  );

  const { achievementCategoryService } = useContext(APIServiceContext);

  useEffect(() => {
    previewCardData.forEach((pcd) => {
      console.log(
        achievementCategoryService.find({
          name: { $eq: pcd.title },
        })
      );
      // .then((values) => {
      //   achievementCategoryService.updateOne({
      //     filter: { id: { $eq: "0ceca66f-0ed5-4fcc-a7a1-fce166abdfac" } },
      //     update: {
      //       $set: {
      //         achievement_ids: ["b907ce11-a5ca-4076-a56d-58878b02ce77"],
      //       },
      //     },
      //   });
      // });
    });
  });

  return (
    <>
      <ColumnGrid>
        {previewCardData.map((category, index) => (
          <PreviewCard
            onClick={() => {
              setActivePCIdx(index);
              setSearchParams((prev) => {
                prev.set(achievementParam, category.title);
                return prev;
              });
            }}
            src={category.src}
            key={index}
            title={category.title}
          />
        ))}
      </ColumnGrid>
      {typeof activePCIdx === "number" && (
        <Modal
          closer={() => {
            setActivePCIdx(null);
            setSearchParams((prev) => {
              prev.delete(achievementParam);
              return prev;
            });
          }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            {(() => {
              const Component = previewCardData[activePCIdx].ActualElement;
              return <Component />;
            })()}
          </Suspense>
        </Modal>
      )}
    </>
  );
};

export default AchievementsPage;
