import MemoryGame from "../components/MemoryGame/MemoryGame";
import MemoryGame3 from "../components/MemoryGame/MemoryGame3";
import MemoryGame4 from "../components/MemoryGame/MemoryGame4";
import MemoryGame5 from "../components/MemoryGame/MemoryGame5";
import TicTacToeGame from "../components/TicTacToeGame/TicTacToeGame";
import TicTacToeGame2 from "../components/TicTacToeGame/TicTacToeGame2";
import TicTacToeGame3 from "../components/TicTacToeGame/TicTacToeGame3";
import TicTacToeGame4 from "../components/TicTacToeGame/TicTacToeGame4";
import TicTacToeGame5 from "../components/TicTacToeGame/TicTacToeGame5";

export const GamePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600 bg-gray-300 p-2 text-center">
          Memory Game
        </h1>
        <MemoryGame5 />
      </section>
      <section className="py-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-blue-600 bg-gray-300 p-2 text-center">
          Tic Tac Toe Game
        </h1>
        <TicTacToeGame5 />
      </section>
    </div>
  );
};
