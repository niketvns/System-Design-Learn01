import { useEffect, useState } from "react";
const uniqueCards = ["🍎", "🍌", "🍒", "🍇", "🥑", "🍍", "🍉", "🥕"];

const generateInitialCards = () => {
  const shuffledCards = [...uniqueCards, ...uniqueCards]
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({
      id: index,
      value,
      isOpen: true,
      isMatched: false,
    }));

  return shuffledCards;
};

export const useMemoryGame = () => {
  const [cards, setCards] = useState(generateInitialCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, isOpen: false }))
      );
    }, 2000);
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = selectedCards;
      if (cards[firstCardIndex].value === cards[secondCardIndex].value) {
        setSelectedCards([]);
        setCards((prevCards) =>
          prevCards.map((card, i) => {
            return selectedCards.includes(i)
              ? { ...card, isMatched: true }
              : card;
          })
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              selectedCards.includes(i) ? { ...card, isOpen: false } : card
            )
          );
          setSelectedCards([]);
        }, 500);
      }
      setSteps((prev) => ++prev);
    }
  }, [selectedCards, cards]);

  const handleCardClick = (index) => {
    if (selectedCards?.length < 2 && !cards[index].isOpen) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          index === i ? { ...card, isOpen: true } : card
        )
      );
      setSelectedCards((prevCards) => [...prevCards, index]);
    }
  };

  return {
    handleCardClick,
    steps,
    cards,
  };
};
