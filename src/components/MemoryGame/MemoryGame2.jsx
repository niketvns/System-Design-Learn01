import { useEffect, useState } from "react";

const initialCards = ["🍎", "🍌", "🍒", "🍇", "🥑", "🍍", "🍉", "🥕"];

const generateSuffledCards = () => {
  const suffledCards = [...initialCards, ...initialCards]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, value: emoji, isOpen: true }));

  return suffledCards;
};

const MemoryGame2 = () => {
  const [cards, setCards] = useState(generateSuffledCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          return { ...card, isOpen: false };
        })
      );
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;

      if (cards[first].value === cards[second].value) {
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              selectedCards.includes(i) ? { ...card, isOpen: false } : card
            )
          );
          setSelectedCards([]);
        }, 800);
      }

      setSteps((prev) => prev + 1);
    }
  }, [selectedCards, cards]);

  const handleCardClick = (cardIndex) => {
    if (selectedCards?.length < 2 && !cards[cardIndex].isOpen) {
      setCards((prev) =>
        prev.map((card, i) =>
          i === cardIndex ? { ...card, isOpen: true } : card
        )
      );
      setSelectedCards([...selectedCards, cardIndex]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1>Memory Game</h1>
      <h3>Total Steps: {steps}</h3>
      <div className="grid grid-cols-4 gap-2">
        {cards?.map((card, i) => (
          <button
            key={i}
            className={`h-16 w-16 text-4xl bg-gray-300 flex justify-center items-center rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-400 ${
              card.isOpen ? "rotate-y-180" : "rotate-y-0"
            }`}
            onClick={() => handleCardClick(i)}
          >
            {card.isOpen ? card.value : "?"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame2;
