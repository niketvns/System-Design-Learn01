import { Accordion } from "../components/Accordion";

export const AccordionPage = () => {
  return (
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
  );
};
