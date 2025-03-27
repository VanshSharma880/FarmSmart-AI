import React from "react";
import CropForm from "./CropForm.jsx";
import ChatBot from "./ChatBot.jsx";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-green-600 to-green-800">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        FarmSmart AI - ChatBot
      </h1>
      <ChatBot />
    </div>
  );
};

export default Dashboard;
