import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Modal } from "@src/common/components/Modal";
import { ColumnGrid } from "@src/common/layouts/grid/ColumnGrid";
import { paths } from "@src/router/paths";

import { PreviewCard, PreviewCardProps } from "./PreviewCard";
import { Resume } from "./projects/Resume";
import { ParcelEye } from "./projects/ParcelEye";
import { CatDog } from "./projects/CatDog";
import { HighLow } from "./projects/HighLow";
import { Ascenda } from "./projects/Ascenda";

const previewCardData: (Omit<PreviewCardProps, "onClick"> & {
  ActualElement: () => JSX.Element;
})[] = [
  {
    title: "Ascenda",
    src: paths.public.projectDir.ascendaDir.preview,
    ActualElement: () => <Ascenda />,
  },
  {
    title: "HighLow",
    src: paths.public.projectDir.highLowDir.preview,
    ActualElement: () => <HighLow />,
  },
  {
    title: "ParcelEye",
    src: paths.public.projectDir.parcelEyeDir.preview,
    ActualElement: () => <ParcelEye />,
  },
  {
    title: "CatDog (CNN)",
    src: paths.public.projectDir.catDogDir.preview,
    ActualElement: () => <CatDog />,
  },
  {
    title: "Resume",
    src: paths.public.projectDir.resumeDir.preview,
    ActualElement: () => <Resume />,
  },
];
const previewCardTitleToIdx = new Map<string, number>();
for (let i = 0; i < previewCardData.length; i++)
  previewCardTitleToIdx.set(previewCardData[i].title, i);

const projectParam = "project";

export const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // PC means PreviewCard
  const [activePCIdx, setActivePCIdx] = useState<number | null>(
    previewCardTitleToIdx.get(searchParams.get(projectParam) || "") ?? null
  );
  return (
    <>
      <ColumnGrid>
        {previewCardData.map((category, index) => (
          <PreviewCard
            onClick={() => {
              setActivePCIdx(index);
              setSearchParams((prev) => {
                prev.set(projectParam, category.title);
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
              prev.delete(projectParam);
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
