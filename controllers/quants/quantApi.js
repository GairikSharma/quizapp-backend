const { quantQuestion } = require("../../models/quizScheema");

//creating a quant question
const createQANTQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const correctOption = req.body.correctOption;
  const point = req.body.point;

  //create a question with it
  const qs = await quantQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    point: point,
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
