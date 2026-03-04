import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) setUsername(savedUser);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("username", username);
        navigate("/welcome");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl w-96 text-white">
        
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition duration-300"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/30 transition duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="mt-5 text-center text-red-300 bg-red-500/20 py-2 rounded-lg animate-pulse">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;