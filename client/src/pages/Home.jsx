import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
        alt="Farm Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white p-6 sm:p-10 rounded-xl max-w-2xl mx-4 sm:mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Welcome to <span className="text-green-400">FarmSmart AI</span> 🌾
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-light drop-shadow-md">
          Your advanced farming assistant powered by AI.
        </p>
        <p className="text-base text-gray-300 sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium drop-shadow-md">
          Get real-time crop recommendations and expert farming advice tailored
          to your needs.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="http://127.0.0.1:5000"
            className="bg-white text-green-700 px-6 py-3 rounded-lg hover:border-green-700 border-2 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <span className="mr-2">🍃</span> Predict Your Crop
          </a>
          <Link to="/dashboard">
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
              Get Started
            </button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-3xl animate-bounce">🌱</span>
          <span className="text-3xl animate-bounce delay-100">🚜</span>
          <span className="text-3xl animate-bounce delay-200">🌞</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
