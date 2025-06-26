import { useState } from "react";

const Counter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const logoutResult = () => {
    console.log(email + " " + password + " " + username);

    if (password.length < 5) {
      alert();
    }
  };
  return (
    <div className="p-[100px] space-y-3">
      <div className="w-[400px] h-[40px] border-2 border-gray-100">
        <input
          type="email"
          className="w-full h-full pl-2 outline-none"
          placeholder="Enter Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="w-[400px] h-[40px] border-2 border-gray-100">
        <input
          type="text"
          className="w-full h-full pl-2 outline-none"
          placeholder="Enter Your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="w-[400px] h-[40px] border-2 border-gray-100">
        <input
          type="password"
          className="w-full h-full pl-2 outline-none"
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={logoutResult}>Submit</button>
    </div>
  );
};

export default Counter;
