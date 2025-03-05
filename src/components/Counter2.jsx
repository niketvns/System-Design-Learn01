/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Counter2 = ({ initialTime = 3600 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 || !isPlaying) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isPlaying]);

  const hours = Math.floor(timeLeft / (60 * 60));
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const addLeadingZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <div>
      <div className="text-4xl font-semibold text-green-400">
        {addLeadingZero(hours)} : {addLeadingZero(minutes)} :{" "}
        {addLeadingZero(seconds)}
      </div>
      <button
        className="bg-blue-400 px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setIsPlaying((prev) => !prev)}
      >
        {!isPlaying ? "Play" : "Pause"}
      </button>
    </div>
  );
};

export default Counter2;
