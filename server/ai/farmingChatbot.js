// class FarmingChatbot {
//   async getResponse(message) {
//     // Simple rule-based responses (can be enhanced with NLP)
//     const msg = message.toLowerCase();

//     if (msg.includes("soil")) {
//       return "For better crop yield, test your soil pH and maintain it between 6.0-7.0 for most crops.";
//     }
//     if (msg.includes("water") || msg.includes("irrigation")) {
//       return "Most crops need 1-2 inches of water per week. Consider drip irrigation for efficiency.";
//     }
//     if (msg.includes("pest")) {
//       return "Common pest control methods include crop rotation, natural predators, and organic pesticides.";
//     }
//     return "I can help with farming questions! Ask about soil, water, pests, or crops.";
//   }
// }

// module.exports = new FarmingChatbot();

const axios = require("axios");
require("dotenv").config();

class FarmingChatbot {
  async getResponse(message) {
    const prompt = `
      You are an expert farming assistant. A farmer has asked: "${message}"
      Provide a detailed, helpful response related to farming, agriculture, or crop management.
    `;

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent", // Updated model
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": process.env.GEMINI_API_KEY, // API key as query param alternative below
          },
        }
      );

      const result = response.data.candidates[0].content.parts[0].text;
      return result;
    } catch (error) {
      console.error(
        "Gemini API error:",
        error.response ? error.response.data : error.message
      );
      return `Error: Could not get response from AI. Details: ${error.message}`;
    }
  }
}

module.exports = new FarmingChatbot();
