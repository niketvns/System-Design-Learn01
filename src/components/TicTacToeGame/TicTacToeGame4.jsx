import { useState } from "react";

const generateInitialBoard = () => Array(9).fill(null);

const WINNING_LOGIC = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToeGame4 = () => {
  const [board, setBoard] = useState(generateInitialBoard);
  const [isXTurn, setIsXTurn] = useState(true);

  const calculateWinner = (cBoard) => {
    for (let i = 0; i < WINNING_LOGIC.length; i++) {
      const [first, second, third] = WINNING_LOGIC[i];
      if (
        cBoard[first] &&
        cBoard[first] === cBoard[second] &&
        cBoard[first] === cBoard[third]
      ) {
        return cBoard[first];
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
    if (!board.includes(null)) return `It's a Draw`;

    return `Player ${isXTurn ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    const res = window.confirm("Are you sure want to reset ?");
    if (res) {
      setBoard(generateInitialBoard);
      setIsXTurn(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl">{getStatusMessage()}</h1>
      {(board.includes("X") || board.includes("O")) && (
        <button
          className="bg-red-400 text-white px-4 py-2 rounded-md"
          onClick={resetGame}
        >
          Reset Game
        </button>
      )}
      <div className="grid grid-cols-3">
        {board?.map((b, i) => {
          return (
            <button
              key={i}
              className="h-24 w-24 rounded-md text-4xl bg-gray-200 border-2 border-white hover:bg-gray-300 cursor-pointer disabled:bg-gray-300"
              onClick={() => handleCardClick(i)}
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

export default TicTacToeGame4;
