import styled from "styled-components";

import { FlexRow } from "@src/common/layout/flex";
import { Img } from "@src/common/element/Img";
import { Video } from "@src/common/element/Video";
import { FlatCarousel } from "@src/common/layout/Carousel/FlatCarousel";
import { isVideo } from "@src/common/util";
import { Media } from "./Media";

const StyledFlatCarousel = styled(FlatCarousel)`
  * > img,
  video {
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  * > img {
    cursor: pointer;
  }
`;

const StyledFlexRow = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
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
  activeMediaIdx: number;
  setActiveMediaIdx: (idx: number) => void;
}

export const Main = ({
  medias,
  onClickMedia,
  activeMediaIdx,
  setActiveMediaIdx,
}: MainProps) => {
  const components = [];
  for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if (!isVideo(media)) {
      components.push(
        <Img
          key={i}
          src={media}
          onClick={() => {
            if (onClickMedia) onClickMedia(i);
          }}
        />
      );
    } else {
      components.push(<Video key={i} src={media} controls />);
    }
  }

  return (
    <StyledFlexRow>
      <StyledFlatCarousel activeEleIdx={activeMediaIdx}>
        {components.length > 0 && <>{components}</>}
      </StyledFlatCarousel>
      <Arrow
        $right={false}
        onClick={() => setActiveMediaIdx(activeMediaIdx - 1)}
      />
      <Arrow
        $right={true}
        onClick={() => setActiveMediaIdx(activeMediaIdx + 1)}
      />
    </StyledFlexRow>
  );
};
