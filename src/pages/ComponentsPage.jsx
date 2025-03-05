import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Pagination from "../components/Pagination";
import { useGlobalState } from "../contexts/AppContext";
import { useDebounce } from "../hooks/useDebounce";
import Counter from "../components/Counter";
import { Accordion } from "../components/Accordion";

const MAX_VISIBLE_PAGES = 5;

export const ComponentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { globalState } = useGlobalState();
  const [input, setInput] = useState("");
  const [triggeredVal, setTriggeredVal] = useState(0);
  const debounceSearchTerm = useDebounce(input, 800);

  const progresses = [5, 10, 40, 80, 100];

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    if (input) {
      setTriggeredVal((prev) => ++prev);
    }
  }, [debounceSearchTerm]);

  return (
    <div className="flex flex-col gap-5">
      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600">Counter</h1>
        <Counter />
      </section>
      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600">
          Debouncing and Context
        </h1>
        <div>Data from Store: {globalState.user}</div>
        <input
          type="text"
          className="border"
          onChange={(e) => setInput(e.target.value)}
        />
        <div>{triggeredVal}</div>
      </section>
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
      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600">Accordion</h1>
        <div>
          <Accordion
            initialEntered={1}
            className={"flex flex-col gap-2 max-w-[1024px] mx-auto mt-8"}
            isMulti={false}
          >
            <Accordion.Item
              id={1}
              title={"Title #1"}
              description={"Description #1"}
            />
            <Accordion.Item
              id={2}
              title={"Title #2"}
              description={"Description #2"}
            />
            <Accordion.Item
              id={3}
              title={"Title #3"}
              description={"Description #3"}
            />
            <Accordion.Item
              id={4}
              title={"Title #4"}
              description={"Description #4"}
            />
          </Accordion>
        </div>
      </section>
    </div>
  );
};
