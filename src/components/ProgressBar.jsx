import { useEffect } from "react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="border-2 border-black/20 rounded-full overflow-hidden">
      <div
        className="bg-green-600 text-end py-1 text-white pr-2 transition-all duration-300 ease-in"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
