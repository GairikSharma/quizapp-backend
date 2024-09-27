const mongoose = require("mongoose");

const participantDetails = new mongoose.Schema({
  email: { type: String, required: true },
  score: { type: Number, default: 0 },
});

const Participant = mongoose.model("Participant", participantDetails);

module.exports = { Participant };