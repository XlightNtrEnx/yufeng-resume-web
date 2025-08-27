import { createContext, useState } from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atoms/isMobile";
import {
  MediaScroller,
  MediaScrollerProps,
} from "@src/common/components/MediaScroller";
import { Modal } from "@src/common/components/Modal";
import { H2 } from "@src/common/elements/text";
import { Div } from "@src/common/elements/Div";
import { FlexColumn } from "@src/common/layouts/flex";
import { Button } from "@src/common/elements/Button";

import { Description } from "./Description";
import { Links } from "./Links";
import { AchievementsLayout } from "@src/features/achievement/achievements/achievement-components/AchievementsLayout";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1rem;
`;

export interface ProjectProps
  extends Omit<MediaScrollerProps, "onClickMedia" | "skip"> {
  name: string;
  description: string;
  Achievements?: () => React.ReactElement<typeof AchievementsLayout>;
  urls?: string[];
  isRecursed?: boolean;
}

const StyledH2 = styled(H2)`
  text-align: start;
`;

const AchievementsButton = ({
  Achievements,
}: Pick<ProjectProps, "Achievements">) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Achievements</Button>
      {displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          {Achievements && Achievements()}
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
  Achievements,
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
            {Achievements && <AchievementsButton Achievements={Achievements} />}
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
