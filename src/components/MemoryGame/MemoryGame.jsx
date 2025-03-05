import { useEffect, useState } from "react";

const initialCards = ["🍎", "🍌", "🍒", "🍇", "🥑", "🍍", "🍉", "🥕"];

const generateCards = () => {
  const shuffledCards = [...initialCards, ...initialCards]
    .sort(() => Math.random() - 0.5)
    .map((val, index) => {
      return { id: index, emoji: val, isOpen: false };
    });

  return shuffledCards;
};

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards);
  const [selectedCard, setSelectedCard] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (isGameStarted) {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, isOpen: true }))
      );
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) => ({ ...card, isOpen: false }))
        );
      }, 2000);
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (selectedCard.length === 2) {
      const [first, second] = selectedCard;

      if (cards[first].emoji === cards[second].emoji) {
        setSelectedCard([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              selectedCard.includes(i) ? { ...card, isOpen: false } : card
            )
          );
          setSelectedCard([]);
        }, 800);
      }
    }
  }, [selectedCard, cards]);

  const handleCardClick = (cardIndex) => {
    if (!isGameStarted) return;

    if (selectedCard.length < 2 && !cards[cardIndex].isOpen) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === cardIndex ? { ...card, isOpen: true } : card
        )
      );
    }
    setSelectedCard((prev) => [...prev, cardIndex]);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {!isGameStarted && (
        <button
          onClick={() => setIsGameStarted(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Start Game
        </button>
      )}
      {!isGameStarted && <p className="text-xl">Game will start soon</p>}
      <div className="grid grid-cols-4 gap-4">
        {cards?.map((cardObj, index) => {
          return (
            <button
              key={cardObj.id}
              onClick={() => handleCardClick(index)}
              className="w-16 h-16 text-4xl text-center cursor-pointer bg-gray-300 hover:bg-gray-400 transition-all ease-in-out rounded-md"
            >
              {cardObj.isOpen ? (
                cardObj.emoji
              ) : (
                <span className="text-red-500 font-bold">?</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;
