import { useEffect, useState } from "react";

const INITIAL_TIME = 90;

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 || !isPlaying) return;

    const handler = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(handler);
  }, [timeLeft, isPlaying]);

  const hours = Math.floor(timeLeft / (60 * 60));
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col gap-2 items-start">
      {timeLeft === 0 && (
        <div className="text-2xl font-semibold text-red-500">Timeup!</div>
      )}
      {/* <div>Time Left: {timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div> */}
      <div className="text-4xl text-green-800 font-bold">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="flex gap-3">
        {!isPlaying && timeLeft === INITIAL_TIME && (
          <button
            onClick={() => setIsPlaying(true)}
            className="bg-blue-400 px-4 py-2 rounded-md cursor-pointer"
          >
            Start
          </button>
        )}
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="bg-blue-400 px-4 py-2 rounded-md cursor-pointer"
        >
          {isPlaying ? "Pause" : "Resume"}
        </button>
        <button
          onClick={() => {
            setIsPlaying(true);
            setTimeLeft(INITIAL_TIME);
          }}
          className="bg-blue-400 px-4 py-2 rounded-md cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
