const mongoose = require("mongoose");

const quizScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  point: Number,
  correctOptionIndex: Number,
});

const QuizQuestion = mongoose.model("quizes", quizScheema);
module.exports = QuizQuestion;
