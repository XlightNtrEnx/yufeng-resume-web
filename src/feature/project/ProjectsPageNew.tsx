import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { PreviewCard } from "@src/common/component/PreviewCard";
import { APIServiceContext } from "@src/provider/APIServiceProvider";
import {
  Preview,
  PreviewType,
} from "@src/provider/APIServiceProvider/preview/preview-model";
import { Project as ProjectModel } from "@src/provider/APIServiceProvider/project/project-model";
import { Project as ProjectComponent } from "./projects/project-components";

const projectParam = "project";

export const ProjectsPageNew = () => {
  const { projectService, previewService } = useContext(APIServiceContext);

  // Get all Preview
  const [projectPreviews, setProjectPreviews] = useState<Preview[]>([]);
  useEffect(() => {
    previewService
      .getPartition({ type: PreviewType.Project })
      .then((values) => {
        setProjectPreviews(values);
      });
  }, [previewService]);

  // Map each projectPreview.name to its index
  const projectPreviewNameToIdx = useMemo(() => {
    const map = new Map<string, number>();
    projectPreviews.forEach((value, idx) => map.set(value.name, idx));
    return map;
  }, [projectPreviews]);

  // URL param must reflect active Projet
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePreviewIdx, setActivePreviewIdx] = useState<number | null>(null);
  useEffect(() => {
    setActivePreviewIdx(
      projectPreviewNameToIdx.get(searchParams.get(projectParam) || "") ?? null
    );
  }, [projectPreviewNameToIdx, searchParams]);

  // The ProjectModel being focused on screen
  const [activeProjectModels, setActiveProjectModels] = useState<
    ProjectModel[]
  >([]);
  const [fetchingActiveProjectModels, setFetchingActiveProjectModels] =
    useState<boolean>(false);
  useEffect(() => {
    if (activePreviewIdx != null) {
      setFetchingActiveProjectModels(true);
      const activePreview = projectPreviews[activePreviewIdx];
      projectService
        .getPartition({ preview_id: activePreview.id })
        .then((value) => {
          setActiveProjectModels(value);
        })
        .finally(() => {
          setFetchingActiveProjectModels(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePreviewIdx]);

  return (
    <>
      {projectPreviews.length > 0 ? (
        <ColumnGrid>
          {projectPreviews.map((preview, index) => (
            <PreviewCard
              onClick={() => {
                setActivePreviewIdx(index);
                setSearchParams((prev) => {
                  prev.set(projectParam, preview.name);
                  return prev;
                });
              }}
              src={preview.image_url}
              key={index}
              title={preview.name}
            />
          ))}
        </ColumnGrid>
      ) : (
        <LoadingSpinner />
      )}
      {typeof activePreviewIdx === "number" && (
        <Modal
          closer={() => {
            setActivePreviewIdx(null);
            setSearchParams((prev) => {
              prev.delete(projectParam);
              return prev;
            });
          }}
        >
          {fetchingActiveProjectModels ? (
            <LoadingSpinner />
          ) : (
            <>
              {activeProjectModels.map((projectModel, idx) => {
                return (
                  <ProjectComponent
                    name={projectModel.name}
                    description={projectModel.description}
                    medias={projectModel.medias}
                    urls={projectModel.urls}
                    achievementIds={projectModel.achievement_ids}
                    achievementPreviewIds={projectModel.achievement_preview_ids}
                    key={idx}
                  />
                );
              })}
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default ProjectsPageNew;
