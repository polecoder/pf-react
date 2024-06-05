import { useState } from "react";

/**
 * Hook to generate a counter with increment and decrement functions
 *
 * @param {Number} initial
 * @param {Number} min
 * @param {Number} max
 * @returns {Object} count, decrement, increment
 */
export function useCount(initial = 0, min, max) {
  if (initial < min || initial > max) initial = min;

  const [count, setCount] = useState(initial);

  const decrement = () => {
    setCount((prev) => (prev > min ? prev - 1 : prev));
  };

  const increment = () => {
    setCount((prev) => (prev < max ? prev + 1 : prev));
  };

  return {
    count,
    decrement,
    increment,
  };
}
