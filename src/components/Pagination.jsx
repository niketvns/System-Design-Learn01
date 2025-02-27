/* eslint-disable react/prop-types */
const Pagination = ({
  onPageChange,
  //   goToNext,
  //   goToPrev,
  maxVisiblePages,
  totalPages,
  currentPage,
}) => {
  const renderButton = (page, isActive) => {
    return (
      <button
        onClick={() => onPageChange(page)}
        className={`px-4 py-2 border cursor-pointer rounded-md ${
          isActive ? "bg-blue-300" : ""
        }`}
      >
        {page}
      </button>
    );
  };

  const renderPages = () => {
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderButton(i, i === currentPage));
      }
    } else {
      pages.push(renderButton(1, currentPage === 1));

      if (currentPage > 3) {
        pages.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderButton(i, i === currentPage));
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(renderButton(totalPages, currentPage === totalPages));
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`p-2 border cursor-pointer rounded-md disabled:opacity-40`}
      >
        ⬅️{" "}
      </button>
      {renderPages()}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`p-2 border cursor-pointer rounded-md disabled:opacity-40`}
      >
        ➡️{" "}
      </button>
    </div>
  );
};

export default Pagination;
