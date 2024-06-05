import React from "react";
import { useCount } from "../hooks/useCount";

function Counter({ max }) {
  const { count, increment, decrement } = useCount(1, 1, max);

  return (
    <div className="h-fit w-fit rounded-full border-[1px] border-dark text-center text-2xl">
      {count > 1 ? (
        <button
          className="w-[32px] rounded-l-full bg-dark px-2 text-light transition-all duration-300 hover:bg-light hover:text-dark"
          onClick={decrement}
        >
          -
        </button>
      ) : (
        <button
          disabled
          className="w-[32px] rounded-l-full bg-dark px-2 text-light transition-all duration-300 hover:bg-light hover:text-dark"
          onClick={decrement}
        >
          -
        </button>
      )}
      <span className="w-[32px]} px-2">{count}</span>
      {count < max ? (
        <button
          className="w-[32px] rounded-r-full bg-dark px-2 text-light transition-all duration-300 hover:bg-light hover:text-dark"
          onClick={increment}
        >
          +
        </button>
      ) : (
        <button
          className="w-[32px] rounded-r-full bg-dark px-2 text-light transition-all duration-300 hover:bg-light hover:text-dark"
          onClick={increment}
          disabled
        >
          +
        </button>
      )}
    </div>
  );
}

export default Counter;
