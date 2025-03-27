import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-600 to-green-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1625023725961-2a2b2d17e0c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Farmer About"
          className="w-1/2 md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to FarmSmart AI, a platform dedicated to empowering farmers
            with smart, AI-driven solutions. Our goal is to provide data-driven
            insights, modern techniques, and a supportive community for farmers
            to enhance their agricultural practices.
          </p>
          <p>
            With our cutting-edge technology, we aim to make farming smarter and
            more sustainable. Join us in revolutionizing the agricultural
            industry!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
