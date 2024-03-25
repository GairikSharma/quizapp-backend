const QuizQuestion = require("../models/quizScheema");
const oopQuizQuestion = require("../models/quizScheema");
const dsaQuizQuestion = require("../models/quizScheema");

//Create API (quiz scheema)
const createQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const newQuestion = await QuizQuestion.create({
    question: question,
    options: options,
    point: point,
    correctOptionIndex: correctOption,
  });
  //respond with new question
  res.json({ quizes: newQuestion });
};

//Create API (oop scheema)
const createOOPQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const newOOPQuestion = await oopQuizQuestion.create({
    question: question,
    options: options,
    point: point,
    correctOptionIndex: correctOption,
  });
  //respond with new question
  res.json({ oop: newOOPQuestion });
};




//Create API (dsa scheema)
const createDSAQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const newDSAQuestion = await dsaQuizQuestion.create({
    dsa_question: question,
    dsa_options: options,
    dsa_point: point,
    dsa_correctOptionIndex: correctOption,
  });
  //respond with new question
  res.json({ dsa: newDSAQuestion });
};

//Read API
const getQuestion = async (req, res) => {
  //finding all the questions
  const allQuestions = await QuizQuestion.find();
  //response
  res.json({ allquestions: allQuestions });
};

module.exports = {
  newQuestion: createQuestion,
  newOOPQuestion: createOOPQuestion,
  newDSAQuestion: createDSAQuestion,
  getAllQuestions: getQuestion,
};
