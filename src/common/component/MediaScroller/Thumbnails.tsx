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
  imgWidth?: string;
}

const StyledFlexRow = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  aspect-ratio: 16 / 1.8;

  img,
  svg {
    cursor: pointer;
  }
`;

const InnerStyledFlexRow = styled(FlexRow)<{
  $right?: string;
  $imgWidth?: string;
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
    width: ${({ $imgWidth }) => $imgWidth || "100%"};
    height: 100%;
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
  imgWidth,
  visibleMediaIdx: selectedMediaIdx,
  setVisibleMediaIdx: setSelectedMediaIdx,
}: ThumbnailsProps) => {
  const components = [];
  for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if (!isVideo(media)) {
      components.push(
        <Img
          key={i}
          onClick={() => {
            setSelectedMediaIdx(i);
          }}
          src={media}
        />
      );
    } else {
      components.push(
        <PlayButton
          key={i}
          onClick={() => {
            setSelectedMediaIdx(i);
          }}
        />
      );
    }
  }

  return (
    <StyledFlexRow>
      <InnerStyledFlexRow
        $imgWidth={imgWidth ? imgWidth : "20%"}
        $right={`${firstThumbnailIdx * 20}%`}
      >
        <ActiveSelectionBorder $left={`${selectedMediaIdx * 20}%`} />
        {components.length > 0 && <>{components}</>}
      </InnerStyledFlexRow>
    </StyledFlexRow>
  );
};
