import { lazy, Suspense, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";
import { paths } from "@src/router/paths";

import { PreviewCard, PreviewCardProps } from "./PreviewCard";
import { AchievementsLayout } from "./achievements/achievement-components/AchievementsLayout";

const LazyAI = lazy(() => import("@src/feature/achievement/achievements/AI"));
const LazyAndroid = lazy(
  () => import("@src/feature/achievement/achievements/Android")
);
const LazyArchitecture = lazy(
  () => import("@src/feature/achievement/achievements/Architecture")
);
const LazyCloud = lazy(
  () => import("@src/feature/achievement/achievements/Cloud")
);
const LazyContainerization = lazy(
  () => import("@src/feature/achievement/achievements/Containerization")
);
const LazyDatabase = lazy(
  () => import("@src/feature/achievement/achievements/Database")
);
const LazyDevOps = lazy(
  () => import("@src/feature/achievement/achievements/DevOps")
);
const LazyEE = lazy(() => import("@src/feature/achievement/achievements/EE"));
const LazyScripting = lazy(
  () => import("@src/feature/achievement/achievements/Scripting")
);
const LazyServer = lazy(
  () => import("@src/feature/achievement/achievements/Server")
);
const LazyWeb = lazy(() => import("@src/feature/achievement/achievements/Web"));

const previewCardData: (Omit<PreviewCardProps, "onClick"> & {
  ActualElement: React.LazyExoticComponent<
    () => React.ReactElement<typeof AchievementsLayout>
  >;
})[] = [
  {
    title: "AI",
    src: paths.public.achievementDir.aiDir.preview,
    ActualElement: LazyAI,
  },
  {
    title: "Android",
    src: paths.public.achievementDir.androidDir.preview,
    ActualElement: LazyAndroid,
  },
  {
    title: "Architecture",
    src: paths.public.achievementDir.architectureDir.preview,
    ActualElement: LazyArchitecture,
  },
  {
    title: "Cloud computing",
    src: paths.public.achievementDir.cloudDir.preview,
    ActualElement: LazyCloud,
  },
  {
    title: "Containerization",
    src: paths.public.achievementDir.dockerDir.preview,
    ActualElement: LazyContainerization,
  },

  {
    title: "Database",
    src: paths.public.achievementDir.databaseDir.preview,
    ActualElement: LazyDatabase,
  },
  {
    title: "DevOps",
    src: paths.public.achievementDir.devOpsDir.preview,
    ActualElement: LazyDevOps,
  },
  {
    title: "Elec. Eng",
    src: paths.public.achievementDir.eeDir.preview,
    ActualElement: LazyEE,
  },
  {
    title: "Scripting",
    src: paths.public.achievementDir.scriptingDir.preview,
    ActualElement: LazyScripting,
  },
  {
    title: "Server (Misc)",
    src: paths.public.achievementDir.serverDir.preview,
    ActualElement: LazyServer,
  },
  {
    title: "Web",
    src: paths.public.achievementDir.webDir.preview,
    ActualElement: LazyWeb,
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
