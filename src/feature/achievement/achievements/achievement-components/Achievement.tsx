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

export interface AchievementProps
  extends Omit<MediaScrollerProps, "onClickMedia" | "medias">,
    Partial<Pick<MediaScrollerProps, "medias">> {
  name: string;
  description: string;
  projectId: string;
  projectPreviewId: string;
  urls?: string[];
  isNestedAchievement?: boolean;
}

const StyledH2 = styled(H2)`
  text-align: left;
`;

const SourceProjectButton = ({
  projectPreviewId,
  projectId,
}: Pick<AchievementProps, "projectPreviewId" | "projectId">) => {
  const { projectService } = useContext(APIServiceContext);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [projectModel, setProjectModel] = useState<null | ProjectModel>(null);

  useEffect(() => {
    if (displayModal) {
      projectService
        .getPartition({ preview_id: projectPreviewId })
        .then((projects) => {
          for (const project of projects) {
            if (project.id === projectId) {
              setProjectModel(project);
              return;
            }
          }
        });
    }
  }, [displayModal, projectService, projectId, projectPreviewId]);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Source Project</Button>
      {displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          {projectModel == null ? (
            <LoadingSpinner />
          ) : (
            <ProjectComponent
              name={projectModel.name}
              description={projectModel.description}
              urls={projectModel.urls}
              medias={projectModel.medias}
              achievementPreviewIds={projectModel.achievement_preview_ids}
              achievementIds={projectModel.achievement_ids}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export const AchievementContext = createContext((skip: number[]) => {});
export const Achievement = ({
  name,
  description,
  urls,
  isNestedAchievement,
  projectId,
  projectPreviewId,
  medias,
  ...rest
}: AchievementProps) => {
  const id = sanitizeFragment(name);
  const registerFragment = useContext(RegisterFragmentContext);
  useEffect(() => {
    if (!isNestedAchievement) return registerFragment(id);
  }, [isNestedAchievement, registerFragment, id]);

  const [skip, setSkip] = useState<number[]>([0]);

  const [zoomIn, setZoomIn] = useState<boolean>(false);

  return (
    <>
      <AchievementContext.Provider value={setSkip}>
        <StyledFlexColumn id={id}>
          <Div>
            <StyledH2>{name}</StyledH2>
            <SourceProjectButton
              projectId={projectId}
              projectPreviewId={projectPreviewId}
            />
          </Div>
          {urls && <Links urls={urls} />}
          <Description description={description} />
          <MediaScroller
            onClickMedia={(mediaIdx: number) => {
              if (window.innerWidth > mobileBreakpointInPx) {
                setZoomIn(true);
                setSkip([mediaIdx]);
              }
            }}
            skip={skip}
            medias={medias ?? []}
            {...rest}
          />
        </StyledFlexColumn>
      </AchievementContext.Provider>
      {!isNestedAchievement && zoomIn && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setZoomIn(false)}
        >
          <Achievement
            name={name}
            description={description}
            urls={urls}
            isNestedAchievement={true}
            projectPreviewId={projectPreviewId}
            projectId={projectId}
            skip={skip}
            medias={medias ?? []}
            {...rest}
          />
        </Modal>
      )}
    </>
  );
};
