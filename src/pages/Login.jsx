import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    try {
      setLoading(true);
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials
      );

      if (response.status == 200) {
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      setError(true);
      setLoading(false);
      setErrorMessage(error.response.data);
      // console.log("Error", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            required
          />

          {error && <span className="mt-3 text-red-500">{errorMessage}</span>}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center bg-blue-600 text-center text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? (
            <svg width="25px" height="25px" viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#ffff"
                stroke-width="4"
                fill="none"
                stroke-linecap="round"
                stroke-dasharray="100"
                stroke-dashoffset="60"
                floodColor="white"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;

// mor_2314
// 83r5^_
