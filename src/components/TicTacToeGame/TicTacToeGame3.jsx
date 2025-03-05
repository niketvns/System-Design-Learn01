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

const TicTacToeGame3 = () => {
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
        return curBoard[a];
      }
    }
    return null;
  };

  const handleCardClick = (index) => {
    const winner = calculateWinner(board);
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn((prev) => !prev);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a Draw!`;

    return `Player ${isXTurn ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(generateInitialBoard());
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">{getStatusMessage()}</h1>
      <button
        className="bg-red-400 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={resetGame}
      >
        Reset Game
      </button>
      <div className="grid grid-cols-3">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              className="w-20 h-20 text-2xl rounded-md bg-gray-200 border-2 border-white cursor-pointer hover:bg-gray-300"
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

export default TicTacToeGame3;
