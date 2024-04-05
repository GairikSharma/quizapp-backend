const { quantQuestion } = require("../../models/quizSchema");

//creating a quant question
const createQANTQuestion = async (req, res) => {
  //get the sent in data off req body

  const { question, options, correctOption, explaination, point } = req.body;

  //create a question with it
  const qs = await quantQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
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
