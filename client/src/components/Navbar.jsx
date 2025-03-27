import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold flex items-center"
        >
          <img
            src="/images.jpg"
            alt="logo"
            className="w-10 h-10 mr-2 rounded-full"
          />
          FarmSmart AI
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-white hover:text-green-200 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-green-200 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-green-200 transition"
          >
            Contact Us
          </Link>
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-white hover:text-green-200 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-green-200 transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-green-200 transition"
              >
                AI ChatBot
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
