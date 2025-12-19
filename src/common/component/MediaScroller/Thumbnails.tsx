import styled from "styled-components";

import { Img } from "@src/common/element/Img";
import { FlexRow } from "@src/common/layout/flex";
import { EnsurePropertyExists } from "@src/types";
import { isVideo } from "@src/common/util";
import { PlayButton } from "@src/common/svg";

import { MainProps } from "./Main";

interface ThumbnailsProps
  extends Omit<
    EnsurePropertyExists<MainProps, "onClickMedia">,
    "onClickMedia"
  > {
  firstThumbnailIdx: number;
}

const StyledFlexRow = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  aspect-ratio: 16 / 1.8;
`;

const InnerStyledFlexRow = styled(FlexRow)<{
  $right?: string;
}>`
  position: relative;
  right: ${({ $right }) => $right || "0%"};
  transition: right 0.5s, left 0.5s;
  width: 100%;

  > img,
  video,
  svg {
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: 20%;
    height: 100%;
    cursor: pointer;
    flex-shrink: 0; /* Firefox won't overflow but shrink so use this to force overflow */
  }

  > svg {
    padding: 2%;
  }
`;

const ActiveSelectionBorder = styled.div<{ $width?: string; $left?: string }>`
  position: absolute;
  border: 3px solid red;
  left: ${({ $left: left }) => left || "0%"};
  aspect-ratio: 16 / 9;
  width: ${({ $width: width }) => width || "20%"};
  transition: right 0.5s, left 0.5s;
`;

export const Thumbnails = ({
  medias,
  firstThumbnailIdx,
  activeMediaIdx,
  setActiveMediaIdx,
}: ThumbnailsProps) => {
  const components = [];
  for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if (!isVideo(media)) {
      components.push(
        <Img
          key={i}
          onClick={() => {
            setActiveMediaIdx(i);
          }}
          src={media}
        />
      );
    } else {
      components.push(
        <PlayButton
          key={i}
          onClick={() => {
            setActiveMediaIdx(i);
          }}
        />
      );
    }
  }

  return (
    <StyledFlexRow>
      <InnerStyledFlexRow $right={`${firstThumbnailIdx * 20}%`}>
        <ActiveSelectionBorder $left={`${activeMediaIdx * 20}%`} />
        {components.length > 0 && <>{components}</>}
      </InnerStyledFlexRow>
    </StyledFlexRow>
  );
};
