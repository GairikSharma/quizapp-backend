const { dsaQuestion } = require("../../models/quizSchema");

//creating new dsa question
const createDSAQuestion = async (req, res) => {
  //get the sent in data off req body
  const { question, code, options, correctOption, explaination, point } = req.body;

  //create a question with it
  const qs = await dsaQuestion.create({
    question: question,
    code: code,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
    point: point,
  });
  //respond with new question
  res.json({ dsa: qs });
};

//getting all dsa questions
const getDSAQuestion = async (req, res) => {
  //finding all the questions
  const allDSAQuestions = await dsaQuestion.find();
  //response
  res.json({ all_qs: allDSAQuestions });
};

module.exports = { new_dsa_qs: createDSAQuestion, all_dsa_qs: getDSAQuestion };
