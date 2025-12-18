import { lazy, Suspense, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";
import { paths } from "@src/router/paths";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import {
  PreviewCard,
  PreviewCardProps,
} from "@src/common/component/PreviewCard";
import { Project } from "./projects/project-components";

const Ascenda = lazy(() => import("./projects/Ascenda"));
const HighLow = lazy(() => import("./projects/HighLow"));
const ParcelEye = lazy(() => import("./projects/ParcelEye"));
const CatDog = lazy(() => import("./projects/CatDog"));
const Resume = lazy(() => import("./projects/Resume"));
const PanasonicFMCWRadar = lazy(() => import("./projects/PanasonicFMCWRadar"));

const previewCardData: (Omit<PreviewCardProps, "onClick"> & {
  LazyProject: React.LazyExoticComponent<
    () => React.ReactElement<typeof Project>
  >;
})[] = [
  {
    title: "Panasonic FMCW Radar",
    src: paths.public.projectDir.panasonicFMCWRadar.preview,
    LazyProject: PanasonicFMCWRadar,
  },
  {
    title: "Ascenda CRUD webapp",
    src: paths.public.projectDir.ascendaDir.preview,
    LazyProject: Ascenda,
  },
  {
    title: "HighLow FPGA game",
    src: paths.public.projectDir.highLowDir.preview,
    LazyProject: HighLow,
  },
  {
    title: "ParcelEye Android AI app",
    src: paths.public.projectDir.parcelEyeDir.preview,
    LazyProject: ParcelEye,
  },
  {
    title: "CatDog (CNN)",
    src: paths.public.projectDir.catDogDir.preview,
    LazyProject: CatDog,
  },
  {
    title: "Resume web",
    src: paths.public.projectDir.resumeDir.preview,
    LazyProject: Resume,
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
          <Suspense fallback={<LoadingSpinner />}>
            {(() => {
              const Component = previewCardData[activePCIdx].LazyProject;
              return <Component />;
            })()}
          </Suspense>
        </Modal>
      )}
    </>
  );
};

export default ProjectsPage;
