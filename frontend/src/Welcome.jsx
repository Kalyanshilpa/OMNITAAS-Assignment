import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [show, setShow] = useState(false);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">

      {/* Soft floating blobs */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      {/* Card */}
      <div
        className={`relative bg-white/70 backdrop-blur-lg border border-white/50 p-12 rounded-3xl shadow-xl text-center transform transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome, {username}! 🎉
        </h1>

        <p className="text-gray-600 mb-8">
          You have successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 hover:scale-105 transition duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;