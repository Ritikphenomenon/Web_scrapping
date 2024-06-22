const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const generatePageNumbers = () => {
      let pageNumbers = [];
  
      if (totalPages <= 5) {
        pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);
      } else {
        if (currentPage <= 3) {
          pageNumbers = [1, 2, 3, 4, "...", totalPages];
        } else if (currentPage > 3 && currentPage < totalPages - 2) {
          pageNumbers = [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
          ];
        } else {
          pageNumbers = [
            1,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        }
      }
  
      return pageNumbers;
    };
  
    return (
      <div className="flex mt-1">
        <span className="text-gray-600 mr-8 ">
          <span className="text-sm font-normal font-inter leading-[21px] mr-3">
            Showing
          </span>
          <span className="text-sm font-semibold font-inter leading-[21px] mr-2">
            {currentPage * 6 - 5}-{currentPage * 6}
          </span>
          <span className="text-sm font-normal font-inter leading-[21px] mr-1">
            of
          </span>
          <span className="text-sm font-semibold font-inter leading-[21px]">
            {totalPages}
          </span>
        </span>
  
        <div className="flex ">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`border ${
              currentPage === 1
                ? "btn-disabled  bg-white w-[33px] h-[28px] p-[2px 5px]"
                : "w-[33px] h-[28px] p-[2px 5px]  bg-white"
            }`}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
  
          {generatePageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              className={`border ${
                currentPage === page
                  ? "btn-active bg-[#F6F2FF] w-[33px] h-[28px] p-[2px 5px]"
                  : "w-[33px] h-[28px] py-[2px] px-[5px]  border border-[#D1D5DB] flex items-center justify-center bg-white"
              } ${page === "..." ? "cursor-default" : ""}`}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
  
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`border ${
              currentPage === totalPages
                ? "btn-disabled  bg-white w-[33px] h-[28px] p-[2px 5px]"
                : "w-[33px] h-[28px] p-[2px_5px]  bg-white"
            }`}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;
  