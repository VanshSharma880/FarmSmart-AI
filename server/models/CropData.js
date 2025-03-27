const mongoose = require("mongoose");

const cropDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  soilType: String,
  rainfall: Number,
  temperature: Number,
  location: String,
  recommendation: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CropData", cropDataSchema);
