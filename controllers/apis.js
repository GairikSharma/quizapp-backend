const QuizQuestion = require("../models/quizScheema");

//Create API
const createQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const newQuestion = await QuizQuestion.create({
    question: question,
    options: options,
    correctOptionIndex: correctOption,
    point: point
  });
  //respond with new question
  res.json({ quizes: newQuestion });
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
    getAllQuestions: getQuestion
}