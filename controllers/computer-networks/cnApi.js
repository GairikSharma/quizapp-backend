const { cnQuestion } = require("../../models/quizSchema");

//creating new cn question
const createDBMSQuestion = async (req, res) => {
  //get the sent in data off req body
  const {question, options, correctOption, explaination, point} = req.body;
  
  //create a question with it
  const qs = await cnQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    point: point,
    explaination: explaination
  });
  //respond with new question
  res.json({ cn: qs });
};

//getting all cn questions
const getCNQuestion = async (req, res) => {
  //finding all the questions
  const allCNQuestions = await cnQuestion.find();
  //response
  res.json({ all_qs: allCNQuestions });
};

module.exports = { new_cn_qs: createDBMSQuestion, all_cn_qs: getCNQuestion };
