export interface PageProps {
  active: boolean;
  onClick: () => void;
  pageNumber: number;
}

interface PaginationProps {
  PageComponent: React.ComponentType<PageProps>;
  currentPage: number;
  onPageChange: (currentPage: number) => void;
  totalPages: number;
}

export const Pagination = ({
  PageComponent,
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) => {
  return (
    <>
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <PageComponent
            key={pageNumber}
            active={pageNumber === currentPage}
            pageNumber={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          />
        );
      })}
    </>
  );
};
