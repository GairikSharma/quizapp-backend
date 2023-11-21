const QuizQuestion = require("../models/quizScheema");

//Create API
const createMessage = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const correctOption = req.body.correctOptionIndex;
  //create a message with it
  const newQuestion = await QuizQuestion.create({
    question: question,
    options: options,
    correctOptionIndex: correctOption,
  });
  //respond with new note
  res.json({ quizes: newQuestion });
};

//Read API


module.exports = {
    newQuestion: createMessage
}