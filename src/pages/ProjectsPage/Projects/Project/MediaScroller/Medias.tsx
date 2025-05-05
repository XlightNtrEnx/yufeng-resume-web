import styled from "styled-components";

import { FlexRow } from "@src/components";
import { Img, Video } from "@src/elements";
import { zIndexes } from "@src/zIndex";

const Container = styled(FlexRow)`
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
    z-index: ${zIndexes.pages.projects.projectModal.img};
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: ${({ $imgWidth }) => $imgWidth || "100%"};
  }
`;

const Arrow = styled.div<{ $right: boolean }>`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.pages.projects.projectModal.arrow};
  cursor: pointer;
  width: 10%;
  height: 50%;
  position: absolute;
  top: 25%;
  ${({ $right }) => ($right ? "right: 0" : "left: 0")};
`;

export interface MediasProps {
  medias: string[];
  onClickMedia: () => void;
  selectedMediaIdx: number;
  setSelectedMediaIdx: (idx: number) => void;
}

export const Medias = ({
  medias,
  onClickMedia,
  selectedMediaIdx,
  setSelectedMediaIdx,
}: MediasProps) => {
  return (
    <Container>
      <ActualMediasContainer $right={`${selectedMediaIdx * 100}%`}>
        {medias.map((media, idx) =>
          media.endsWith("mp4") ? (
            <Video key={idx} src={media} controls />
          ) : (
            <Img onClick={onClickMedia} key={idx} src={media} />
          )
        )}
      </ActualMediasContainer>
      <Arrow
        $right={false}
        onClick={() =>
          setSelectedMediaIdx(
            selectedMediaIdx === 0 ? medias.length - 1 : selectedMediaIdx - 1
          )
        }
      />
      <Arrow
        $right={true}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx + 1)}
      />
    </Container>
  );
};
