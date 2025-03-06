import { useEffect, useState } from "react";

const initialCards = ["🍎", "🍌", "🍒", "🍇", "🥑", "🍍", "🍉", "🥕"];

const generateInitialCards = () => {
  const shuffledCards = [...initialCards, ...initialCards]
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({ id: index, value, isOpen: false }));

  return shuffledCards;
};

const MemoryGame5 = () => {
  const [cards, setCards] = useState(generateInitialCards);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;

      if (cards[firstIndex].value === cards[secondIndex].value) {
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              selectedCards.includes(index) ? { ...card, isOpen: false } : card
            )
          );
          setSelectedCards([]);
        }, 500);
      }
    }
  }, [selectedCards, cards]);

  const handleCardClick = (index) => {
    if (selectedCards.length < 2 && !cards[index].isOpen) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isOpen: true } : card
        )
      );

      setSelectedCards((prev) => [...prev, index]);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4">
        {cards?.map((card, index) => {
          return (
            <button
              key={card.id}
              className={`h-24 w-24 bg-gray-200 border-2 border-white text-6xl rounded-md cursor-pointer hover:bg-gray-300 flex items-center justify-center text-red-400 transition-all duration-300 ${
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

export default MemoryGame5;
