const { oopQuestion } = require("../../models/quizScheema");

//creating new oop question
const createOOPQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const qs = await oopQuestion.create({
    question: question,
    options: options,
    point: point,
    correctOptionIndex: correctOption,
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
