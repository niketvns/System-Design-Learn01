import { useState } from "react";

const generateInitialBoard = () => Array(9).fill(null);

const WINING_LOGIC = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToeGame2 = () => {
  const [board, setBoard] = useState(generateInitialBoard);
  const [isXTurn, setIsXTurn] = useState(true);

  const calculateWinner = (curBoard) => {
    for (let i = 0; i < WINING_LOGIC.length; i++) {
      const [a, b, c] = WINING_LOGIC[i];
      if (
        curBoard[a] &&
        curBoard[a] === curBoard[b] &&
        curBoard[a] === curBoard[c]
      ) {
        return {
          winner: curBoard[a],
          card: [a, b, c],
        };
      }
    }
    return {
      winner: null,
      card: null,
    };
  };

  const getStatusMessage = () => {
    const { winner } = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a Draw`;
    return `Player ${isXTurn ? "X" : "O"} turn`;
  };

  const { card: isHighlight } = calculateWinner(board);

  const handleCardClick = (index) => {
    const { winner } = calculateWinner(board);

    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl">{getStatusMessage()}</h1>
      <button className="bg-blue-400 text-white rounded-md px-4 py-2 cursor-pointer">
        Reset Game
      </button>
      <div className="grid grid-cols-3">
        {board?.map((b, index) => {
          return (
            <button
              key={index}
              className={`h-24 w-24 cursor-pointer bg-gray-200 border-2 border-white text-2xl ${
                isHighlight?.includes(index)
                  ? "bg-green-500"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => handleCardClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToeGame2;
