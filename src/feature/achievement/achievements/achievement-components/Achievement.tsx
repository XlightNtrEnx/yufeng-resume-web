import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
import {
  MediaScroller,
  MediaScrollerProps,
} from "@src/common/component/MediaScroller";
import { Button } from "@src/common/element/Button";
import { Modal } from "@src/common/component/Modal";
import { H2 } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex";
import { Project } from "@src/feature/project/projects/project-components";
import {
  RegisterFragmentContext,
  sanitizeFragment,
} from "@src/provider/MaintainURLHash";
import { Div } from "@src/common/element/Div";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";

import { Description } from "./Description";
import { Links } from "./Links";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1rem;
`;

export interface AchievementProps
  extends Omit<MediaScrollerProps, "onClickMedia"> {
  name: string;
  description: string;
  LazyProject?: React.LazyExoticComponent<
    () => React.ReactElement<typeof Project>
  >;
  urls?: string[];
  isNestedAchievement?: boolean;
}

const SourceProjectButton = ({
  LazyProject,
}: Pick<AchievementProps, "LazyProject">) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setDisplayModal(true)}>Source Project</Button>
      {LazyProject && displayModal && (
        <Modal
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setDisplayModal(false)}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <LazyProject />
          </Suspense>
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
  LazyProject,
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
            <H2>{name}</H2>
            {LazyProject && <SourceProjectButton LazyProject={LazyProject} />}
          </Div>
          {urls && <Links urls={urls} />}
          <Description description={description} />
          <MediaScroller
            onClickMedia={() => {
              window.innerWidth < mobileBreakpointInPx || setZoomIn(true);
            }}
            skip={skip}
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
            LazyProject={LazyProject}
            skip={skip}
            {...rest}
          />
        </Modal>
      )}
    </>
  );
};
