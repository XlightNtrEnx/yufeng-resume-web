import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Modal } from "@src/common/components/Modal";
import { ColumnGrid } from "@src/common/layouts/grid/ColumnGrid";
import { paths } from "@src/router/paths";

import { AI } from "./achievements/AI";
import { Android } from "./achievements/Android";
import { Cloud } from "./achievements/Cloud";
import { Containerization } from "./achievements/Containerization";
import { Database } from "./achievements/Database";
import { EE } from "./achievements/EE";
import { Server } from "./achievements/Server";
import { Web } from "./achievements/Web";
import { PreviewCard, PreviewCardProps } from "./PreviewCard";

const previewCardData: (Omit<PreviewCardProps, "onClick"> & {
  ActualElement: () => JSX.Element;
})[] = [
  {
    title: "AI",
    src: paths.public.achievementDir.previewCardImagesDir.ai,
    ActualElement: AI,
  },
  {
    title: "Android",
    src: paths.public.achievementDir.previewCardImagesDir.android,
    ActualElement: Android,
  },
  {
    title: "Cloud computing",
    src: paths.public.achievementDir.previewCardImagesDir.cloud,
    ActualElement: Cloud,
  },
  {
    title: "Containerization",
    src: paths.public.achievementDir.previewCardImagesDir.docker,
    ActualElement: Containerization,
  },
  {
    title: "Database",
    src: paths.public.achievementDir.previewCardImagesDir.database,
    ActualElement: Database,
  },
  {
    title: "Elec. Eng",
    src: paths.public.achievementDir.previewCardImagesDir.ee,
    ActualElement: EE,
  },
  {
    title: "Server (Misc)",
    src: paths.public.achievementDir.previewCardImagesDir.server,
    ActualElement: Server,
  },
  {
    title: "Web",
    src: paths.public.achievementDir.previewCardImagesDir.web,
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
          {previewCardData[activePCIdx].ActualElement()}
        </Modal>
      )}
    </>
  );
};
