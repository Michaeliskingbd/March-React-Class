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

      <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tailwind card
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conditional;
