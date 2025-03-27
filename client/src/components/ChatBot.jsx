import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent empty messages

    setLoading(true);
    try {
      const response = await axios.post(
        "/api/crop/chatbot",
        { message },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setChatHistory([
        ...chatHistory,
        { user: message, bot: response.data.response },
      ]);
      setMessage("");
    } catch (error) {
      console.error("Chatbot error:", error);
      setChatHistory([
        ...chatHistory,
        { user: message, bot: "Error: Could not connect to FarmBot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Simple function to format AI response (basic Markdown-like parsing)
  const formatMessage = (text) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className="mb-2">
        {line.startsWith("- ") ? (
          <span className="flex items-start">
            <span className="mr-2">•</span>
            {line.substring(2)}
          </span>
        ) : (
          line
        )}
      </p>
    ));
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4 sm:mb-6 flex items-center">
        <span className="mr-2">🌱</span> FarmBot Chat
      </h2>
      <div className="h-64 sm:h-72 overflow-y-auto mb-4 sm:mb-6 p-4 bg-gray-50 rounded-lg border">
        {chatHistory.length === 0 && !loading && (
          <p className="text-gray-500 italic text-center">
            Start chatting with FarmBot!
          </p>
        )}
        {chatHistory.map((chat, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-end">
              <p className="inline-block text-blue-600 font-medium bg-blue-100 p-3 rounded-lg max-w-[80%] break-words">
                <span className="font-bold">You:</span> {chat.user}
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <p className="inline-block text-green-700 bg-green-100 p-3 rounded-lg max-w-[80%] break-words">
                <span className="font-bold">FarmBot:</span>{" "}
                {formatMessage(chat.bot)}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-green-600"></div>
            <p className="ml-2 text-gray-500 italic">FarmBot is thinking...</p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask farming questions..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
          disabled={loading}
        />
        <button
          type="submit"
          className={`w-full sm:w-auto bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
