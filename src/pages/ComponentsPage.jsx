import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Pagination from "../components/Pagination";

const MAX_VISIBLE_PAGES = 5;

export const ComponentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const progresses = [5, 10, 40, 80, 100];

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  return (
    <div className="flex flex-col gap-5">
      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600">Progress Bar</h1>
        {progresses?.map((progress) => {
          return <ProgressBar key={progress} progress={progress} />;
        })}
      </section>

      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600">Pagination</h1>
        <Pagination
          totalPages={10}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          maxVisiblePages={MAX_VISIBLE_PAGES}
        />
      </section>
    </div>
  );
};
