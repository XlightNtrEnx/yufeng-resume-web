import styled from "styled-components";

import { FlexRow } from "@src/common/layout/flex";
import { Img } from "@src/common/element/Img";
import { Video } from "@src/common/element/Video";

import { Media } from "./Media";

const Viewport = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  aspect-ratio: 16 / 9;
`;

const Strip = styled(FlexRow)<{
  $right?: string;
  $imgWidth?: string;
}>`
  position: relative;
  right: ${({ $right }) => $right || "0%"};
  transition: right 0.5s, left 0.5s;

  > img,
  video {
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: ${({ $imgWidth }) => $imgWidth || "100%"};
  }

  & > img {
    cursor: pointer;
  }
`;

const Arrow = styled.div<{ $right: boolean }>`
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 10%;
  height: 50%;
  position: absolute;
  top: 25%;
  ${({ $right }) => ($right ? "right: 0" : "left: 0")};
`;

export interface MainProps {
  medias: Media[];
  onClickMedia?: (mediaIndex: number) => void;
  selectedMediaIdx: number;
  setSelectedMediaIdx: (idx: number) => void;
}

export const Main = ({
  medias,
  onClickMedia,
  selectedMediaIdx,
  setSelectedMediaIdx,
}: MainProps) => {
  const components = [];
  for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if (!media.isVideo) {
      components.push(
        <Img
          key={i}
          src={media.src}
          onClick={() => {
            if (onClickMedia) onClickMedia(i);
          }}
        />
      );
    } else {
      components.push(<Video key={i} src={media.src} controls />);
    }
  }

  return (
    <Viewport>
      <Strip $right={`${selectedMediaIdx * 100}%`}>
        {components.length > 0 && <>{components}</>}
      </Strip>
      <Arrow
        $right={false}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx - 1)}
      />
      <Arrow
        $right={true}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx + 1)}
      />
    </Viewport>
  );
};
