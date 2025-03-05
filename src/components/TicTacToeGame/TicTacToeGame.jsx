import useTicTacToe from "../../hooks/useTicTacToe";

const TicTacToeGame = () => {
  const { board, resetGame, handleCardClick, getStatusMessages } =
    useTicTacToe();

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl">{getStatusMessages()}</p>
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
              className="h-20 w-20 text-3xl font-semibold bg-gray-300 border-2 border-white disabled:bg-gray-400"
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

export default TicTacToeGame;
