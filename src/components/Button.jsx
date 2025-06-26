import React from "react";

const Button = ({ body }) => {
  return (
    <button className="bg-yellow-400 w-[100%] rounded-2xl px-8 py-2 font-bold border-2 border-yellow-500 hover:bg-blue-500 hover:text-white hover:border-blue-700">
      {body}
    </button>
  );
};

export default Button;
