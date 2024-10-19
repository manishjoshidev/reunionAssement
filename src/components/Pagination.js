import React from "react";

const Pagination = ({
  pageIndex,
  pageSize,
  pageCount,
  canPreviousPage,
  canNextPage,
  nextPage,
  previousPage,
}) => {
  return (
    <div>
      <button onClick={previousPage} disabled={!canPreviousPage}>
        Previous
      </button>

      <span>
        Page {pageIndex + 1} of {pageCount}
      </span>
      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
