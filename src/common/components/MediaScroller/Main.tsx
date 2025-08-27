import styled from "styled-components";

import { FlexRow } from "@src/common/layouts/flex";
import { Img } from "@src/common/elements/Img";
import { Video } from "@src/common/elements/Video";

const StyledFlexRow = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;

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
  mediasDir: string;
  onClickMedia?: () => void;
  selectedMediaIdx: number;
  setSelectedMediaIdx: (idx: number) => void;
  totalMedias: number;
  nonPNGMedias?: Record<number, string>;
}

export const Main = ({
  mediasDir,
  onClickMedia,
  selectedMediaIdx,
  setSelectedMediaIdx,
  totalMedias,
  nonPNGMedias,
}: MainProps) => {
  const newMedias = [];
  if (nonPNGMedias) {
    for (let i = 1; i <= totalMedias; i++) {
      if (nonPNGMedias[i]) {
        newMedias.push(
          <Video key={i} src={mediasDir + `/${i}${nonPNGMedias[i]}`} controls />
        );
      } else {
        newMedias.push(
          <Img key={i} src={mediasDir + `/${i}.png`} onClick={onClickMedia} />
        );
      }
    }
  } else {
    for (let i = 1; i <= totalMedias; i++) {
      newMedias.push(
        <Img key={i} src={mediasDir + `/${i}.png`} onClick={onClickMedia} />
      );
    }
  }

  return (
    <StyledFlexRow>
      <ActualMediasContainer $right={`${selectedMediaIdx * 100}%`}>
        {newMedias.length > 0 && <>{newMedias}</>}
      </ActualMediasContainer>
      <Arrow
        $right={false}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx - 1)}
      />
      <Arrow
        $right={true}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx + 1)}
      />
    </StyledFlexRow>
  );
};
