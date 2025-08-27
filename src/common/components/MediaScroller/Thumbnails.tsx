import styled from "styled-components";

import { paths } from "@src/router/paths";
import { FlexRow } from "@src/common/layouts/flex";
import { Img } from "@src/common/elements/Img";
import { EnsurePropertyExists } from "@src/types";

import { MainProps } from "./Main";

interface ThumbnailsProps
  extends Omit<
    EnsurePropertyExists<MainProps, "onClickMedia">,
    "onClickMedia"
  > {
  firstThumbnailIdx: number;
  imgWidth?: string;
}

const ThumbnailsContainer = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  aspect-ratio: 16 / 1.8;

  img {
    cursor: pointer;
  }
`;

const ActualMediasContainer = styled(FlexRow)<{
  $right?: string;
  $imgWidth?: string;
}>`
  position: relative;
  right: ${({ $right }) => $right || "0%"};
  transition: right 0.5s, left 0.5s;
  width: 100%;

  > img,
  video {
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: ${({ $imgWidth }) => $imgWidth || "100%"};
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

const VideoThumbnail = styled(Img)`
  padding: 2%;
`;

export const Thumbnails = ({
  mediasDir,
  firstThumbnailIdx,
  imgWidth,
  selectedMediaIdx,
  setSelectedMediaIdx,
  totalMedias,
  nonPNGMedias,
}: ThumbnailsProps) => {
  const newMedias = [];
  if (nonPNGMedias) {
    for (let i = 1; i <= totalMedias; i++) {
      if (nonPNGMedias[i]) {
        newMedias.push(
          <VideoThumbnail
            onClick={() => {
              setSelectedMediaIdx(i - 1);
            }}
            key={i}
            src={paths.public.iconsDir.playButton}
          />
        );
      } else {
        newMedias.push(
          <Img
            onClick={() => {
              setSelectedMediaIdx(i - 1);
            }}
            key={i}
            src={mediasDir + `/${i}.png`}
          />
        );
      }
    }
  } else {
    for (let i = 1; i <= totalMedias; i++) {
      newMedias.push(
        <Img
          onClick={() => {
            setSelectedMediaIdx(i - 1);
          }}
          key={i}
          src={mediasDir + `/${i}.png`}
        />
      );
    }
  }
  return (
    <ThumbnailsContainer>
      <ActualMediasContainer
        $imgWidth={imgWidth ? imgWidth : "20%"}
        $right={`${firstThumbnailIdx * 20}%`}
      >
        <ActiveSelectionBorder $left={`${selectedMediaIdx * 20}%`} />
        {newMedias.length > 0 && <>{newMedias}</>}
      </ActualMediasContainer>
    </ThumbnailsContainer>
  );
};
