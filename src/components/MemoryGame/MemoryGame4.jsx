import { useMemoryGame } from "../../hooks/useMemoryGame";

const MemoryGame4 = () => {
  const { cards, steps, handleCardClick } = useMemoryGame();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl">Totol Steps: {steps}</h1>
      <div className="grid grid-cols-4">
        {cards?.map((card, index) => {
          return (
            <button
              key={card.id}
              className={`h-20 w-20 text-4xl bg-gray-200 border-1 border-white cursor-pointer transition-all duration-300  ${
                card.isOpen ? "rotate-y-180" : "rotate-y-0"
              } ${
                card.isMatched
                  ? "bg-green-400"
                  : "bg-gray-200 hover:bg-gray-300 disabled:bg-gray-400"
              }`}
              onClick={() => handleCardClick(index)}
              disabled={card.isOpen}
            >
              {card.isOpen ? card.value : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame4;
