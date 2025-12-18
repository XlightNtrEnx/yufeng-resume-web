import { createContext, useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
import {
  MediaScroller,
  MediaScrollerProps,
} from "@src/common/component/MediaScroller";
import { Modal } from "@src/common/component/Modal";
import { Button } from "@src/common/element/Button";
import { Div } from "@src/common/element/Div";
import { H2 } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { Achievement as AchievementComponent } from "@src/feature/achievement/achievements/achievement-components";
import { AchievementsLayout } from "@src/feature/achievement/achievements/achievement-components/AchievementsLayout";
import { APIServiceContext } from "@src/provider/APIServiceProvider";
import { Achievement as AchievementModel } from "@src/provider/APIServiceProvider/achievement/achievement-model";
import { Description } from "./Description";
import { Links } from "./Links";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1rem;
`;

export interface ProjectProps extends Omit<MediaScrollerProps, "onClickMedia"> {
  name: string;
  description: string;
  achievementIds?: string[];
  achievementPreviewIds?: string[];
  urls?: string[];
  isRecursed?: boolean;
}

const StyledH2 = styled(H2)`
  text-align: start;
`;

const AchievementsButton = ({
  achievementIds,
  achievementPreviewIds,
}: Required<
  Pick<ProjectProps, "achievementIds" | "achievementPreviewIds">
>) => {
  const [achievementModels, setAchievementModels] = useState<
    AchievementModel[]
  >([]);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const { achievementService } = useContext(APIServiceContext);
  useEffect(() => {
    if (displayModal) {
      const achievementModelsToBeSet: AchievementModel[] = [];
      for (let i = 0; i < achievementPreviewIds.length; i++) {
        const achievementId = achievementIds[i];
        const achievementPreviewId = achievementPreviewIds[i];
        achievementService
          .getPartition({ preview_id: achievementPreviewId })
          .then((achievements) => {
            for (const achievement of achievements) {
              if (achievement.id === achievementId) {
                achievementModelsToBeSet.push(achievement);
                if (
                  achievementModelsToBeSet.length >=
                  achievementPreviewIds.length
                )
                  setAchievementModels(achievementModelsToBeSet);
              }
            }
          });
      }
    }
  }, [achievementIds, displayModal, achievementService, achievementPreviewIds]);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Achievements</Button>
      {displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          {achievementModels.length > 0 ? (
            <AchievementsLayout>
              {achievementModels.map((model, i) => (
                <AchievementComponent
                  name={model.name}
                  description={model.description}
                  projectPreviewId={model.project_preview_id}
                  projectId={model.project_id}
                  urls={model.urls}
                  medias={model.medias ?? []}
                  key={i}
                />
              ))}
            </AchievementsLayout>
          ) : (
            <LoadingSpinner />
          )}
        </Modal>
      )}
    </>
  );
};

export const ProjectContext = createContext((skip: number[]) => {});
export const Project = ({
  name,
  description,
  urls,
  isRecursed,
  achievementPreviewIds,
  achievementIds,
  medias,
  ...rest
}: ProjectProps) => {
  const [zoomIn, setZoomIn] = useState<boolean>(false);
  const [skip, setSkip] = useState<number[]>([0]);

  return (
    <>
      <ProjectContext.Provider value={setSkip}>
        <StyledFlexColumn>
          <Div>
            <StyledH2>{name}</StyledH2>
            {achievementIds &&
              achievementIds.length > 0 &&
              achievementPreviewIds &&
              achievementPreviewIds.length > 0 && (
                <AchievementsButton
                  achievementIds={achievementIds}
                  achievementPreviewIds={achievementPreviewIds}
                />
              )}
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
            medias={medias}
            {...rest}
          />
        </StyledFlexColumn>
      </ProjectContext.Provider>
      {!isRecursed && zoomIn && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setZoomIn(false)}
        >
          <Project
            name={name}
            description={description}
            urls={urls}
            isRecursed={true}
            skip={skip}
            medias={medias}
            {...rest}
          />
        </Modal>
      )}
    </>
  );
};
