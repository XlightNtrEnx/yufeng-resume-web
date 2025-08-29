import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FlexRow } from "@src/common/layout/flex";
import { PageProps, Pagination } from "@src/common/component/Pagination";
import { Span } from "@src/common/element/text";

import { Media } from "./Media";
import { Main } from "./Main";
import { Thumbnails } from "./Thumbnails";

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

const StyledSpan = styled(Span)<{ $active: boolean }>`
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;
const Page = ({ active, onClick, pageNumber }: PageProps) => {
  return (
    <StyledSpan $active={active} onClick={onClick}>
      {pageNumber}
    </StyledSpan>
  );
};

export interface MediaScrollerProps {
  medias: Media[];
  skip?: number[];
  onClickMedia?: (mediaIndex: number) => void;
}

export const MediaScroller = ({
  medias,
  skip,
  onClickMedia,
}: MediaScrollerProps) => {
  const mediasDirSize = medias.length;
  const thumbnailsPerPage = 5;
  const totalPages = Math.ceil(mediasDirSize / thumbnailsPerPage);

  const [activeMediaIdx, setActiveMediaIdx] = useState<number>(0);
  const [firstThumbnailIdx, setFirstThumbnailIdx] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // One-indexed

  const selectedMediaIdxRef = useRef(activeMediaIdx);
  useEffect(() => {
    selectedMediaIdxRef.current = activeMediaIdx;
  }, [activeMediaIdx]);

  useEffect(() => {
    if (skip && skip[0] !== selectedMediaIdxRef.current) {
      setActiveMediaIdx(skip[0]);
      const newPageNumber = Math.ceil((skip[0] + 1) / thumbnailsPerPage);
      setCurrentPage(newPageNumber);
      setFirstThumbnailIdx((newPageNumber - 1) * thumbnailsPerPage);
    }
  }, [skip]);

  /**
   * Only works if `idx` is 1 off from previous idx
   * @param idx
   * @returns
   */
  const mainSetActiveMediaIdx = (idx: number): void => {
    const change = idx - activeMediaIdx;
    var newMediaIdx: number;
    var newFirstThumbnailIdx: number;
    const newCurrentPage: number =
      Math.floor((idx % mediasDirSize) / thumbnailsPerPage) + 1;

    if (change > 0) {
      // Moved right
      if (idx >= mediasDirSize) {
        // Positive overflow
        newMediaIdx = idx % mediasDirSize;
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
        newMediaIdx = mediasDirSize - 1;
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
    setActiveMediaIdx(newMediaIdx);
    if (newCurrentPage === totalPages)
      newFirstThumbnailIdx = (newCurrentPage - 1) * thumbnailsPerPage;
    if (newCurrentPage === 1) newFirstThumbnailIdx = 0;
    setFirstThumbnailIdx(newFirstThumbnailIdx);
    setCurrentPage(newCurrentPage);
  };

  return (
    <Container>
      <Main
        medias={medias}
        onClickMedia={onClickMedia}
        selectedMediaIdx={activeMediaIdx}
        setSelectedMediaIdx={mainSetActiveMediaIdx}
      />
      <Thumbnails
        medias={medias}
        firstThumbnailIdx={firstThumbnailIdx}
        selectedMediaIdx={activeMediaIdx}
        setSelectedMediaIdx={setActiveMediaIdx}
      />
      {totalPages > 1 && (
        <PaginationContainer>
          <Pagination
            PageComponent={Page}
            currentPage={currentPage}
            onPageChange={(pageNumber: number) => {
              setActiveMediaIdx((pageNumber - 1) * thumbnailsPerPage);
              setFirstThumbnailIdx((pageNumber - 1) * thumbnailsPerPage);
              setCurrentPage(pageNumber);
            }}
            totalPages={totalPages}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};
