import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FlexRow, PageProps, Pagination } from "@src/components";
import { Span } from "@src/elements";
import { PjtContext } from "@src/pages/ProjectsPage/Projects/Project";

import { Medias } from "./Medias";
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

interface CommonProps {
  medias: any[];
  skip?: number[];
}

export interface MediaScrollerProps extends CommonProps {}

export const MediaScroller = (props: MediaScrollerProps) => {
  return (
    <Container>
      <MS {...props} />
    </Container>
  );
};

interface MSProps extends CommonProps {}

export const MS = ({ medias, skip }: MSProps) => {
  const onClickMedia = useContext(PjtContext);

  const thumbnailsPerPage = 5;
  const totalPages = Math.ceil(medias.length / thumbnailsPerPage);

  const [selectedMediaIdx, setSelectedMediaIdx] = useState<number>(0);
  const [firstThumbnailIdx, setFirstThumbnailIdx] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // One-indexed

  const selectedMediaIdxRef = useRef(selectedMediaIdx);
  useEffect(() => {
    selectedMediaIdxRef.current = selectedMediaIdx;
  }, [selectedMediaIdx]);

  useEffect(() => {
    if (skip && skip[0] !== selectedMediaIdxRef.current) {
      setSelectedMediaIdx(skip[0]);
      const newPageNumber = Math.ceil((skip[0] + 1) / thumbnailsPerPage);
      setCurrentPage(newPageNumber);
      setFirstThumbnailIdx((newPageNumber - 1) * thumbnailsPerPage);
    }
  }, [skip]);

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
    <>
      <Medias
        medias={medias}
        onClickMedia={onClickMedia}
        selectedMediaIdx={selectedMediaIdx}
        setSelectedMediaIdx={mediasComponentSelectedMediaIdxSetter}
      />
      <Thumbnails
        medias={medias}
        firstThumbnailIdx={firstThumbnailIdx}
        selectedMediaIdx={selectedMediaIdx}
        setSelectedMediaIdx={setSelectedMediaIdx}
      />
      {totalPages > 1 && (
        <PaginationContainer>
          <Pagination
            PageComponent={Page}
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        </PaginationContainer>
      )}
    </>
  );
};
