const mongoose = require("mongoose");

const question = new mongoose.Schema({
  question: { type: String, required: true },
  code: { type: String, default: null},
  options: [{ type: String, required: true }],
  correctOption: { type: String, required: true },
});

const instantQuiz = new mongoose.Schema({
  questions: [question],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

instantQuiz.index({ createdAt: 1 }, { expireAfterSeconds: 30 });

const temp = mongoose.model("instantQuiz", instantQuiz);

module.exports = { temp };
