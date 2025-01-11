import styled from "styled-components";
import { useState } from "react";

import { Img } from "@src/elements";
import { FlexRow, Modal } from "@src/components";
import { zIndexes } from "@src/zIndex";

interface Props {
  medias: string[];
  selectedMediaIdx: number;
  setSelectedMediaIdx: (idx: number) => void;
}

const Container = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  aspect-ratio: 16 / 9;

  img {
    cursor: pointer;
  }
`;

const ImgsContainer = styled(FlexRow)<{ right?: string; imgWidth?: string }>`
  position: relative;
  right: ${({ right }) => right || "0%"};
  transition: right 0.5s, left 0.5s;

  > img {
    z-index: ${zIndexes.pages.projects.projectModal.img};
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: ${({ imgWidth }) => imgWidth || "100%"};
  }
`;

const Arrow = styled.div<{ right: boolean }>`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.pages.projects.projectModal.arrow};
  cursor: pointer;
  width: 10%;
  height: 100%;
  position: absolute;
  top: 0;
  ${({ right }) => (right ? "right: 0" : "left: 0")};
`;

const EnlargedMedia = styled(Img)`
  object-fit: contain;
  width: 100%;
`;

export const Medias = ({
  medias,
  selectedMediaIdx,
  setSelectedMediaIdx,
}: Props) => {
  const [enlargedMedia, setEnlargedMedia] = useState(-1);
  return (
    <Container>
      <ImgsContainer right={`${selectedMediaIdx * 100}%`}>
        {medias.map((media, idx) => (
          <Img onClick={() => setEnlargedMedia(idx)} key={idx} src={media} />
        ))}
      </ImgsContainer>
      <Arrow
        right={false}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx - 1)}
      />
      <Arrow
        right={true}
        onClick={() => setSelectedMediaIdx(selectedMediaIdx + 1)}
      />
      {enlargedMedia !== -1 && (
        <Modal
          zIndex={zIndexes.pages.projects.projectModal.enlargedMedia}
          padding="0"
          width="90%"
          maxWidth="90%"
          onClose={() => setEnlargedMedia(-1)}
        >
          <EnlargedMedia src={medias[enlargedMedia]} />
        </Modal>
      )}
    </Container>
  );
};

interface ThumbnailsProps extends Props {}

const ThumbnailsContainer = styled(Container)`
  aspect-ratio: 16 / 1.8;
`;

const ActiveSelectionBorder = styled.div<{ width?: string; left?: string }>`
  position: absolute;
  border: 3px solid red;
  top: 0;
  left: ${({ left }) => left || "0%"};
  aspect-ratio: 16 / 9;
  width: ${({ width }) => width || "20%"};
  transition: right 0.5s, left 0.5s;
  z-index: ${zIndexes.pages.projects.projectModal.activeSelectionBorder};
`;

export const Thumbnails = ({
  medias,
  selectedMediaIdx,
  setSelectedMediaIdx,
}: ThumbnailsProps) => {
  return (
    <ThumbnailsContainer>
      <ImgsContainer imgWidth="20%">
        <ActiveSelectionBorder left={`${selectedMediaIdx * 20}%`} />
        {medias.map((media, idx) => (
          <Img
            onClick={() => {
              setSelectedMediaIdx(idx);
            }}
            key={idx}
            src={media}
          />
        ))}
      </ImgsContainer>
    </ThumbnailsContainer>
  );
};
