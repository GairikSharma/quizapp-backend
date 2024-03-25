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

const oopScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  point: Number,
  CorrectOptionIndex: Number,
});


const dsaScheema = new mongoose.Schema({
  dsa_question: String,
  dsa_options: {
    type: [String],
    required: true,
  },
  dsa_point: Number,
  dsa_CorrectOptionIndex: Number,
});


const QuizQuestion = mongoose.model("quizes", quizScheema);
const oopQuizQuestion = mongoose.model("oop", oopScheema);
const dsaQuizQuestion = mongoose.model("dsa", dsaScheema);

module.exports = dsaQuizQuestion;
