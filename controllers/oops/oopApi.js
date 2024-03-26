const { oopQuestion } = require("../../models/quizScheema");

//creating new oop question
const createOOPQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const correctOption = req.body.correctOption;
  const point = req.body.point;

  //create a question with it
  const qs = await oopQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    point: point,
  });
  //respond with new question
  res.json({ oop: qs });
};

//getting all oop questions
const getOOPQuestion = async (req, res) => {
  //finding all the questions
  const allOOPQuestions = await oopQuestion.find();
  //response
  res.json({ all_qs: allOOPQuestions });
};

module.exports = { new_oop_qs: createOOPQuestion, all_oop_qs: getOOPQuestion };
