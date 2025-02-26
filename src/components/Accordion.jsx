/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const AccordionContext = createContext();

const Accordion = ({
  children,
  initialEntered,
  className,
  isMulti = false,
}) => {
  const [activeAccordions, setActiveAccordions] = useState([initialEntered]);

  const handleAccordionChange = useCallback(
    (selectedAcc) => {
      if (isMulti) {
        setActiveAccordions((activeAccs) => {
          if (activeAccs?.includes(selectedAcc)) {
            return activeAccs?.filter((acc) => acc !== selectedAcc);
          } else {
            return [...activeAccs, selectedAcc];
          }
        });
      } else {
        setActiveAccordions((activeAccs) =>
          activeAccs?.[0] === selectedAcc ? [] : [selectedAcc]
        );
      }
    },
    [isMulti]
  );

  const value = useMemo(
    () => ({
      handleAccordionChange,
      activeAccordions,
      isMulti,
    }),
    [handleAccordionChange, activeAccordions, isMulti]
  );

  return (
    <AccordionContext.Provider value={value}>
      <div className={` ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ className, title, description, id }) => {
  const { handleAccordionChange, activeAccordions } =
    useContext(AccordionContext);

  return (
    <div className={`border-2 ${className}`}>
      <button
        className="p-4 cursor-pointer w-full flex justify-between"
        onClick={() => handleAccordionChange(id)}
      >
        <span>{title}</span>
        <span
          className={
            activeAccordions?.includes(id)
              ? "rotate-180 transition-all"
              : "transition-all"
          }
        >
          🔽
        </span>
      </button>
      {activeAccordions?.includes(id) && (
        <div className="p-2 border-t-1">{description}</div>
      )}
    </div>
  );
};

export { AccordionItem };

Accordion.Item = AccordionItem;

export { Accordion };
