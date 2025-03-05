import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = (inputValue, d) => {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(inputValue);
    }, d);

    return () => clearTimeout(handler);
  }, [inputValue, d]);

  return debounceValue;
};
