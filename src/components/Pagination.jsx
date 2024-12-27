import React, { useState } from "react";
import { HiArrowNarrowLeft as Prev, HiArrowNarrowRight as Next } from "react-icons/hi";

const Pagination = () => {
  const totalPages = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="join flex gap-2 justify-end">
      <Prev className={`btn p-3 btn-square !bg-transparent border-none ${isFirstPage && "opacity-40"}`} onClick={() => setCurrentPage((prev) => (isFirstPage ? prev : prev - 1))} />
      {Array.from({ length: totalPages }).map((_, idx) => {
        return <input key={idx} value={idx + 1} className="join-item btn btn-square btn-outline !rounded-sm checked:!bg-black checked:!text-white checked:border-none dark:checked:!bg-white dark:checked:!text-black" type="radio" name="options" aria-label={idx + 1} checked={idx + 1 === currentPage} onChange={(e) => setCurrentPage(+e.target.value)} />;
      })}
      <Next className={`btn p-3 btn-square !bg-transparent border-none ${isLastPage && "opacity-40"}`} onClick={() => setCurrentPage((prev) => (isLastPage ? prev : prev + 1))} />
    </div>
  );
};

export default Pagination;
