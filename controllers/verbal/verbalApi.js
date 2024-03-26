const { verbalQuestion } = require("../../models/quizScheema");

//creating new verbal question
const createVERBALQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const correctOption = req.body.correctOption;
  const point = req.body.point;

  //create a question with it
  const qs = await verbalQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    point: point,
  });
  //respond with new question
  res.json({ verbal: qs });
};

//getting all verbal questions
const getVERBALQuestion = async (req, res) => {
  //finding all the questions
  const allVERBALQuestions = await verbalQuestion.find();
  //response
  res.json({ all_qs: allVERBALQuestions });
};

module.exports = {
  new_verbal_qs: createVERBALQuestion,
  all_verbal_qs: getVERBALQuestion,
};
