import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Hide pagination if only 1 page exists

  const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber); // Update the current page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    onPageChange(pageNumber)
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      {/* Previous Button */}
      {currentPage > 1 && (
        <React.Fragment>
          <span
            className="btn btn-primary mx-1"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            ◀
          </span>
        </React.Fragment>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <React.Fragment key={number}>
          <span
            className={`btn mx-1 ${
              currentPage === number ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </span>
        </React.Fragment>
      ))}

      {/* Next Button */}
      {currentPage < totalPages && (
        <React.Fragment>
          <span
            className="btn btn-primary mx-1"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            ▶
          </span>
        </React.Fragment>
      )}
    </div>
  );
};

export default Pagination;
