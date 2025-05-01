import styled from "styled-components";
import { useState } from "react";

import { FlexRow, PageProps, Pagination } from "@src/components";
import { Span } from "@src/elements";

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

const PaginationContainer = styled(FlexRow)`
  justify-content: center;
  gap: 0.5em;
`;

const StyledSpan = styled(Span)<{ active: boolean }>`
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;
const Page = ({ active, onClick, pageNumber }: PageProps) => {
  return (
    <StyledSpan active={active} onClick={onClick}>
      {pageNumber}
    </StyledSpan>
  );
};

export const MediaScroller = ({ medias }: Props) => {
  const [selectedMediaIdx, setSelectedMediaIdx] = useState<number>(0);
  const [firstThumbnailIdx, setFirstThumbnailIdx] = useState<number>(0);
  const thumbnailsPerPage = 5;
  const totalPages = Math.ceil(medias.length / thumbnailsPerPage); // One-indexed
  const [currentPage, setCurrentPage] = useState<number>(
    Math.floor(selectedMediaIdx / thumbnailsPerPage) + 1
  );

  /**
   * Assumes that | selectedMediaIdx - idx | <= 1
   * @param idx
   */
  const mediasComponentSelectedMediaIdxSetter = (idx: number): void => {
    const change = idx - selectedMediaIdx;
    var newMediaIdx: number;
    var newFirstThumbnailIdx: number;
    const newCurrentPage: number =
      Math.floor((idx % medias.length) / thumbnailsPerPage) + 1;

    if (change > 0) {
      // Moved right
      if (idx >= medias.length) {
        // Positive overflow
        newMediaIdx = idx % medias.length;
        newFirstThumbnailIdx = newMediaIdx;
      } else {
        // No overflow
        newMediaIdx = idx;
        if (newMediaIdx - firstThumbnailIdx >= thumbnailsPerPage) {
          // Move thumbnail
          newFirstThumbnailIdx = firstThumbnailIdx + 1;
        } else {
          // Stay thumbnail
          newFirstThumbnailIdx = firstThumbnailIdx;
        }
      }
    } else if (change < 0) {
      // Means moved left
      if (idx < 0) {
        // Negative overflow
        newMediaIdx = medias.length - 1;
        newFirstThumbnailIdx = (totalPages - 1) * thumbnailsPerPage;
      } else {
        // No overflow
        newMediaIdx = idx;
        if (newMediaIdx < firstThumbnailIdx) {
          // Move thumbnail
          newFirstThumbnailIdx = firstThumbnailIdx - 1;
        } else {
          // Stay thumbnail
          newFirstThumbnailIdx = firstThumbnailIdx;
        }
      }
    } else {
      return;
    }

    setSelectedMediaIdx(newMediaIdx);
    if (newCurrentPage === totalPages)
      newFirstThumbnailIdx = (newCurrentPage - 1) * thumbnailsPerPage;
    if (newCurrentPage === 1) newFirstThumbnailIdx = 0;
    setFirstThumbnailIdx(newFirstThumbnailIdx);
    setCurrentPage(newCurrentPage);
  };

  const onPageChange = (pageNumber: number) => {
    setSelectedMediaIdx((pageNumber - 1) * thumbnailsPerPage);
    setFirstThumbnailIdx((pageNumber - 1) * thumbnailsPerPage);
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Medias
        medias={medias}
        selectedMediaIdx={selectedMediaIdx}
        setSelectedMediaIdx={mediasComponentSelectedMediaIdxSetter}
      />
      <Thumbnails
        medias={medias}
        firstThumbnailIdx={firstThumbnailIdx}
        selectedMediaIdx={selectedMediaIdx}
        setSelectedMediaIdx={setSelectedMediaIdx}
      />
      <PaginationContainer>
        <Pagination
          PageComponent={Page}
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </PaginationContainer>
    </Container>
  );
};
