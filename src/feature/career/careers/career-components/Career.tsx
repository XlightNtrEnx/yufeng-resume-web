import { createContext, useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import {
  MediaScroller,
  MediaScrollerProps,
} from "@src/common/component/MediaScroller";
import { Modal } from "@src/common/component/Modal";
import { Button } from "@src/common/element/Button";
import { Div } from "@src/common/element/Div";
import { H2 } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex";
import { Project as ProjectComponent } from "@src/feature/project/projects/project-components";
import { APIServiceContext } from "@src/provider/APIServiceProvider";
import { Project as ProjectModel } from "@src/provider/APIServiceProvider/project/project-model";
import {
  RegisterFragmentContext,
  sanitizeFragment,
} from "@src/provider/MaintainURLHash";
import { Description } from "./Description";
import { Links } from "./Links";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1rem;
`;

export interface CareerProps
  extends Omit<MediaScrollerProps, "onClickMedia" | "medias">,
    Partial<Pick<MediaScrollerProps, "medias">> {
  name: string;
  description: string;
  projectIds?: string[];
  projectPreviewIds?: string[];
  urls?: string[];
  isNestedCareer?: boolean;
}

const StyledH2 = styled(H2)`
  text-align: left;
`;

const ProjectsButton = ({
  projectPreviewIds,
  projectIds,
}: Required<Pick<CareerProps, "projectPreviewIds" | "projectIds">>) => {
  const { projectService } = useContext(APIServiceContext);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [fetchingProjectModels, setFetchingProjectModels] =
    useState<boolean>(false);
  const [projectModels, setProjectModels] = useState<ProjectModel[]>([]);

  useEffect(() => {
    if (displayModal) {
      const projectModelsToBeSet: ProjectModel[] = [];
      setFetchingProjectModels(true);
      for (let i = 0; i < projectPreviewIds.length; i++) {
        const projectPreviewId = projectPreviewIds[i];
        const projectId = projectIds[i];
        projectService
          .getPartition({ preview_id: projectPreviewId })
          .then((projects) => {
            for (const project of projects) {
              if (project.id === projectId) {
                projectModelsToBeSet.push(project);
                if (projectModelsToBeSet.length >= projectPreviewIds.length) {
                  setProjectModels(projectModelsToBeSet);
                  setFetchingProjectModels(false);
                }
              }
            }
          });
      }
    }
  }, [displayModal, projectService, projectIds, projectPreviewIds]);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Source Project</Button>
      {displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          {fetchingProjectModels ? (
            <LoadingSpinner />
          ) : (
            <>
              {projectModels.map((projectModel, idx) => {
                return (
                  <ProjectComponent
                    key={idx}
                    name={projectModel.name}
                    description={projectModel.description}
                    urls={projectModel.urls}
                    medias={projectModel.medias}
                    achievementPreviewIds={projectModel.achievement_preview_ids}
                    achievementIds={projectModel.achievement_ids}
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

export const CareerContext = createContext((skip: number[]) => {});
export const Career = ({
  name,
  description,
  urls,
  isNestedCareer,
  projectIds,
  projectPreviewIds,
  medias,
  ...rest
}: CareerProps) => {
  const id = sanitizeFragment(name);
  const registerFragment = useContext(RegisterFragmentContext);
  useEffect(() => {
    if (!isNestedCareer) return registerFragment(id);
  }, [isNestedCareer, registerFragment, id]);

  const [skip, setSkip] = useState<number[]>([0]);

  const [zoomIn, setZoomIn] = useState<boolean>(false);

  return (
    <>
      <CareerContext.Provider value={setSkip}>
        <StyledFlexColumn id={id}>
          <Div>
            <StyledH2>{name}</StyledH2>
            {projectPreviewIds && projectIds && (
              <ProjectsButton
                projectIds={projectIds}
                projectPreviewIds={projectPreviewIds}
              />
            )}
          </Div>
          {urls && <Links urls={urls} />}
          <Description description={description} />
          {medias && (
            <MediaScroller
              onClickMedia={(mediaIdx: number) => {
                if (window.innerWidth > mobileBreakpointInPx) {
                  setZoomIn(true);
                  setSkip([mediaIdx]);
                }
              }}
              skip={skip}
              medias={medias}
              {...rest}
            />
          )}
        </StyledFlexColumn>
      </CareerContext.Provider>
      {!isNestedCareer && zoomIn && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setZoomIn(false)}
        >
          <Career
            name={name}
            description={description}
            urls={urls}
            isNestedCareer={true}
            projectPreviewIds={projectPreviewIds}
            projectIds={projectIds}
            skip={skip}
            medias={medias}
            {...rest}
          />
        </Modal>
      )}
    </>
  );
};
