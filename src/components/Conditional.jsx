import React, { useState } from "react";

const Conditional = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="h-[100vh] p-40 text-center">
      <div className="space-x-5">
        {count > 0 && (
          <button
            onClick={decrease}
            className="px-4 py-1 rounded-md bg-red-400 hover:bg-red-300"
          >
            -
          </button>
        )}
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={increase}
          className="px-4 py-1 rounded-md bg-green-400  hover:bg-green-300 animate-bounce"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Conditional;
