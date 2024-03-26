const {verbalQuestion} = require ('../../models/quizScheema')

//creating new verbal question
const createVERBALQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const point = req.body.point;
  const correctOption = req.body.correctOptionIndex;
  //create a question with it
  const qs = await verbalQuestion.create({
    question: question,
    options: options,
    point: point,
    correctOptionIndex: correctOption,
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

module.exports = { new_verbal_qs: createVERBALQuestion, all_verbal_qs: getVERBALQuestion };