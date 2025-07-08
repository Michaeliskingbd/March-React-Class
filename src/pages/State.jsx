import React, { useState } from "react";

const State = () => {
  //   let name = "jOHN";
  //   name = "Mike";

  const [text, setText] = useState(""); //first step

  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="border-2 border-black w-1/2 h-[50px] mt-10 ml-3 px-3"
      />
      {text}
    </div>
  );
};

export default State;
