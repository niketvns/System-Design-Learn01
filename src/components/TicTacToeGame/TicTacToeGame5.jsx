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

const TicTacToeGame5 = () => {
  const [board, setBoard] = useState(generateInitialBoard);
  const [isXTurn, setIsXTurn] = useState(true);

  const calculateWinner = (cBoard) => {
    for (let i = 0; i < WINING_LOGIC.length; i++) {
      const [a, b, c] = WINING_LOGIC[i];

      if (cBoard[a] && cBoard[a] === cBoard[b] && cBoard[a] === cBoard[c]) {
        return cBoard[a];
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
    if (!board.includes(null)) return "It's a Draw";

    return `Player ${isXTurn ? "X" : "O"} Turn`;
  };

  const resetGame = () => {
    setBoard(generateInitialBoard);
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <h1 className="text-3xl">{getStatusMessage()}</h1>
      <button onClick={resetGame}>Reset</button>
      <div className="grid grid-cols-3">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              className="h-24 w-24 rounded-md bg-gray-200 border-1 border-white text-4xl cursor-pointer disabled:bg-gray-300 hover:bg-gray-300"
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

export default TicTacToeGame5;
