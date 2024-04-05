const { verbalQuestion } = require("../../models/quizSchema");

//creating new verbal question
const createVERBALQuestion = async (req, res) => {
  //get the sent in data off req body
  const {question, options, correctOption, explaination, point} = req.body;

  //create a question with it
  const qs = await verbalQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
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
