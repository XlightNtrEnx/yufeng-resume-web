import { useState, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";
import { paths } from "@src/router/paths";

import { PreviewCard, PreviewCardProps } from "./PreviewCard";
import { Project } from "./projects/project-components";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";

const LazyAscenda = lazy(() => import("./projects/Ascenda"));
const LazyHighLow = lazy(() => import("./projects/HighLow"));
const LazyParcelEye = lazy(() => import("./projects/ParcelEye"));
const LazyCatDog = lazy(() => import("./projects/CatDog"));
const LazyResume = lazy(() => import("./projects/Resume"));

const previewCardData: (Omit<PreviewCardProps, "onClick"> & {
  LazyProject: React.LazyExoticComponent<
    () => React.ReactElement<typeof Project>
  >;
})[] = [
  {
    title: "Ascenda",
    src: paths.public.projectDir.ascendaDir.preview,
    LazyProject: LazyAscenda,
  },
  {
    title: "HighLow",
    src: paths.public.projectDir.highLowDir.preview,
    LazyProject: LazyHighLow,
  },
  {
    title: "ParcelEye",
    src: paths.public.projectDir.parcelEyeDir.preview,
    LazyProject: LazyParcelEye,
  },
  {
    title: "CatDog (CNN)",
    src: paths.public.projectDir.catDogDir.preview,
    LazyProject: LazyCatDog,
  },
  {
    title: "Resume",
    src: paths.public.projectDir.resumeDir.preview,
    LazyProject: LazyResume,
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
