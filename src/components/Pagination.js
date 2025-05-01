import React from "react";
import { usePagination } from "../contexts/PaginationContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, itemsPerPage } = usePagination();
  const totalItems = 1000;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 0} style={{ background: "blue", color: "#fff", padding: "6px 12px", borderRadius: "5px" }}>
        Previous
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage >= totalPages - 1} style={{ background: "blue", color: "#fff", padding: "6px 12px", borderRadius: "5px" }}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

