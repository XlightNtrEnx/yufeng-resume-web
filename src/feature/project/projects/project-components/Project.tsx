import { createContext, Suspense, useState } from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
import {
  MediaScroller,
  MediaScrollerProps,
} from "@src/common/component/MediaScroller";
import { Modal } from "@src/common/component/Modal";
import { H2 } from "@src/common/element/text";
import { Div } from "@src/common/element/Div";
import { FlexColumn } from "@src/common/layout/flex";
import { Button } from "@src/common/element/Button";

import { Description } from "./Description";
import { Links } from "./Links";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { AchievementsLayout } from "@src/feature/achievement/achievements/achievement-components/AchievementsLayout";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1rem;
`;

export interface ProjectProps
  extends Omit<MediaScrollerProps, "onClickMedia" | "skip"> {
  name: string;
  description: string;
  lazyAchievements?: React.LazyExoticComponent<
    () => React.ReactElement<typeof Achievement>
  >[];
  urls?: string[];
  isRecursed?: boolean;
}

const StyledH2 = styled(H2)`
  text-align: start;
`;

const AchievementsButton = ({
  lazyAchievements,
}: Pick<ProjectProps, "lazyAchievements">) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Achievements</Button>
      {lazyAchievements && displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <AchievementsLayout>
              {lazyAchievements.map((LazyAchievement, i) => (
                <LazyAchievement key={i} />
              ))}
            </AchievementsLayout>
          </Suspense>
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
  lazyAchievements: LazyAchievementsLayout,
  ...rest
}: ProjectProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [skip, setSkip] = useState<number[]>([0]);
  return (
    <>
      <ProjectContext.Provider value={setSkip}>
        <StyledFlexColumn>
          <Div>
            <StyledH2>{name}</StyledH2>
            {LazyAchievementsLayout && (
              <AchievementsButton lazyAchievements={LazyAchievementsLayout} />
            )}
          </Div>
          {urls && <Links urls={urls} />}
          <Description description={description} />
          <MediaScroller
            {...rest}
            onClickMedia={() => {
              window.innerWidth < mobileBreakpointInPx || setFocused(true);
            }}
            skip={skip}
          />
        </StyledFlexColumn>
      </ProjectContext.Provider>
      {!isRecursed && focused && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setFocused(false)}
        >
          <Project
            name={name}
            description={description}
            urls={urls}
            isRecursed={true}
            {...rest}
          />
        </Modal>
      )}
    </>
  );
};
