const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const cropPredictor = require("../ai/cropPrediction");
const farmingChatbot = require("../ai/farmingChatbot");
const CropData = require("../models/CropData");

router.post("/recommend", auth, async (req, res) => {
  try {
    const { soilType, rainfall, temperature, location } = req.body;
    const recommendation = cropPredictor.predictCrop(req.body);

    const cropData = new CropData({
      userId: req.user.id,
      soilType,
      rainfall,
      temperature,
      location,
      recommendation,
    });
    await cropData.save();

    res.json({ recommendation });
  } catch (error) {
    res.status(500).json({ message: "Error getting recommendation" });
  }
});

router.post("/chatbot", auth, async (req, res) => {
  try {
    const response = await farmingChatbot.getResponse(req.body.message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: "Chatbot error" });
  }
});

module.exports = router;
