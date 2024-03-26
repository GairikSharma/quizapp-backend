const { dsaQuestion } = require("../../models/quizScheema");

//creating new dsa question
const createDSAQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const correctOption = req.body.correctOption;
  const point = req.body.point;

  //create a question with it
  const qs = await dsaQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
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
