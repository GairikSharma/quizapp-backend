const { quantQuestion } = require("../../models/quizScheema");

//creating a quant question
const createQANTQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const qs = await quantQuestion.create({
    question: question,
    options: options,
    point: point,
    correctOptionIndex: correctOption,
  });
  //respond with new question
  res.json({ quants: qs });
};

//getting all quant questions
const getQUANTQuestion = async (req, res) => {
  //finding all the questions
  const allQUANTQuestions = await quantQuestion.find();
  //response
  res.json({ all_qs: allQUANTQuestions });
};

module.exports = {
  new_quant_qs: createQANTQuestion,
  all_quant_qs: getQUANTQuestion,
};
