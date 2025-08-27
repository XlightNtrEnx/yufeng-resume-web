import { createContext, useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atoms/isMobile";
import {
  MediaScroller,
  MediaScrollerProps,
} from "@src/common/components/MediaScroller";
import { Button } from "@src/common/elements/Button";
import { Modal } from "@src/common/components/Modal";
import { H2 } from "@src/common/elements/text";
import { FlexColumn } from "@src/common/layouts/flex";
import { Project as Pjt } from "@src/features/project/projects/project-components";
import {
  RegisterFragmentContext,
  sanitizeFragment,
} from "@src/providers/MaintainURLHash";
import { Description } from "./Description";
import { Links } from "./Links";
import { Div } from "@src/common/elements/Div";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1rem;
`;

export interface AchievementProps
  extends Omit<MediaScrollerProps, "onClickMedia"> {
  name: string;
  description: string;
  Project?: () => React.ReactElement<typeof Pjt>;
  urls?: string[];
  isRecursed?: boolean;
}

const SourceProjectButton = ({
  Project,
}: Pick<AchievementProps, "Project">) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Source Project</Button>
      {Project && displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          {Project()}
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
  isRecursed,
  Project,
  ...rest
}: AchievementProps) => {
  const id = sanitizeFragment(name);
  const registerFragment = useContext(RegisterFragmentContext);
  useEffect(() => {
    if (!isRecursed) return registerFragment(id);
  }, [isRecursed, registerFragment, id]);

  const [skip, setSkip] = useState<number[]>([0]);

  const [focused, setFocused] = useState<boolean>(false);
  return (
    <>
      <AchievementContext.Provider value={setSkip}>
        <StyledFlexColumn id={id}>
          <Div>
            <H2>{name}</H2>
            {Project && <SourceProjectButton Project={Project} />}
          </Div>
          {urls && <Links urls={urls} />}
          <Description description={description} />
          <MediaScroller
            onClickMedia={() => {
              window.innerWidth < mobileBreakpointInPx || setFocused(true);
            }}
            skip={skip}
            {...rest}
          />
        </StyledFlexColumn>
      </AchievementContext.Provider>
      {!isRecursed && focused && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setFocused(false)}
        >
          <Achievement
            name={name}
            description={description}
            urls={urls}
            isRecursed={true}
            skip={skip}
            {...rest}
          />
        </Modal>
      )}
    </>
  );
};
