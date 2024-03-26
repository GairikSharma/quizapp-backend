const { cnQuestion } = require("../../models/quizScheema");

//creating new cn question
const createDBMSQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const qs = await cnQuestion.create({
    question: question,
    options: options,
    point: point,
    correctOptionIndex: correctOption,
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
