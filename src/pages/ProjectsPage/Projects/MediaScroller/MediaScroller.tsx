import styled from "styled-components";
import { useState } from "react";

import { Medias, Thumbnails } from "./Medias";

interface Props {
  medias: any[];
}

const Container = styled.div`
  width: 100%;

  > * {
    width: 100%;
  }
`;

export const MediaScroller = ({ medias }: Props) => {
  const [selectedMediaIdx, setSelectedMediaIdx] = useState(0);
  const wrappedSetSelectedMediaIdx = (idx: number) => {
    if (idx < 0) {
      setSelectedMediaIdx(medias.length - 1);
    } else if (idx >= medias.length) {
      setSelectedMediaIdx(0);
    } else {
      setSelectedMediaIdx(idx);
    }
  };

  return (
    <Container>
      <Medias
        medias={medias}
        selectedMediaIdx={selectedMediaIdx}
        setSelectedMediaIdx={wrappedSetSelectedMediaIdx}
      />
      <Thumbnails
        medias={medias}
        selectedMediaIdx={selectedMediaIdx}
        setSelectedMediaIdx={wrappedSetSelectedMediaIdx}
      />
    </Container>
  );
};
