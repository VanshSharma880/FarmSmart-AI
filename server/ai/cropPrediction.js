// class CropPredictor {
//   predictCrop(data) {
//     const { soilType, rainfall, temperature, location } = data;

//     // Simple rule-based AI model (can be replaced with ML model)
//     if (temperature > 25 && rainfall > 1000) {
//       if (soilType.toLowerCase().includes("loam")) {
//         return "Rice";
//       }
//       return "Maize";
//     } else if (temperature > 20 && rainfall > 500) {
//       return "Wheat";
//     } else {
//       return "Barley";
//     }
//   }
// }

// module.exports = new CropPredictor();

const axios = require("axios");
require("dotenv").config();

class CropPredictor {
  async predictCrop(data) {
    const { soilType, rainfall, temperature, location } = data;

    const prompt = `
      Given the following farming conditions:
      - Soil Type: ${soilType}
      - Annual Rainfall: ${rainfall} mm
      - Average Temperature: ${temperature}°C
      - Location: ${location}
      Recommend the best crop to grow and provide a brief explanation in a concise format.
    `;

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
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
            "x-goog-api-key": process.env.GEMINI_API_KEY,
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
      return `Error: Could not get recommendation from AI. Details: ${error.message}`;
    }
  }
}

module.exports = new CropPredictor();
