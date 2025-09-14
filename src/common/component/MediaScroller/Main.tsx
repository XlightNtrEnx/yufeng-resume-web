import styled from "styled-components";

import { FlexRow } from "@src/common/layout/flex";
import { Img } from "@src/common/element/Img";
import { Video } from "@src/common/element/Video";
import { FlatCarousel } from "@src/common/layout/Carousel/FlatCarousel";

import { Media } from "./Media";

const StyledFlexRow = styled(FlexRow)`
  position: relative;
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
  visibleMediaIdx: number;
  setVisibleMediaIdx: (idx: number) => void;
}

export const Main = ({
  medias,
  onClickMedia,
  visibleMediaIdx,
  setVisibleMediaIdx,
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
    <StyledFlexRow>
      <FlatCarousel visibleEleIdx={visibleMediaIdx}>
        {components.length > 0 && <>{components}</>}
      </FlatCarousel>
      <Arrow
        $right={false}
        onClick={() => setVisibleMediaIdx(visibleMediaIdx - 1)}
      />
      <Arrow
        $right={true}
        onClick={() => setVisibleMediaIdx(visibleMediaIdx + 1)}
      />
    </StyledFlexRow>
  );
};
