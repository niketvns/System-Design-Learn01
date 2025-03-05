import { useEffect } from "react";
import { useState } from "react";

const initialCards = ["🍎", "🍌", "🍒", "🍇", "🥑", "🍍", "🍉", "🥕"];

const generateInitialCards = () => {
  return [...initialCards, ...initialCards]
    .sort(() => Math.random() - 0.5)
    .map((val, index) => ({ id: index, value: val, isOpen: true }));
};

const MemoryGame3 = () => {
  const [cards, setCards] = useState(generateInitialCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [steps, setSteps] = useState(0);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, isOpen: false }))
      );
    }, 1000);
  }, [isReset]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first].value === cards[second].value) {
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              selectedCards.includes(index) ? { ...card, isOpen: false } : card
            )
          );
          setSelectedCards([]);
        }, 800);
      }
      setSteps((prev) => prev + 1);
    }
  }, [selectedCards, cards]);

  const handleCardClick = (index) => {
    if (selectedCards?.length < 2 && !cards[index].isOpen) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isOpen: true } : card
        )
      );
      setSelectedCards((prev) => [...prev, index]);
    }
  };

  const resetGame = () => {
    setCards(generateInitialCards());
    setSelectedCards([]);
    setSteps(0);
    setIsReset((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={resetGame}
      >
        Reset Game
      </button>
      <h1>Total Steps: {steps}</h1>
      <div className="grid grid-cols-4">
        {cards?.map((card, index) => {
          return (
            <button
              key={card.id}
              className={`h-20 w-20 bg-gray-200 border-2 border-white text-4xl rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-300 ${
                card.isOpen ? "rotate-y-180" : "rotate-y-0"
              }`}
              onClick={() => handleCardClick(index)}
            >
              {card.isOpen ? card.value : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame3;
