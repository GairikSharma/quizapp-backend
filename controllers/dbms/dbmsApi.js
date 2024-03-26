const { dbmsQuestion } = require("../../models/quizScheema");

//creating new dbms question
const createDBMSQuestion = async (req, res) => {
  //get the sent in data off req body
  const question = req.body.question;
  const options = req.body.options;
  const correctOption = req.body.correctOption;
  const point = req.body.point;

  //create a question with it
  const qs = await dbmsQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    point: point,
  });
  //respond with new question
  res.json({ dbms: qs });
};

//getting all dbms questions
const getDBMSQuestion = async (req, res) => {
  //finding all the questions
  const allDBMSQuestions = await dbmsQuestion.find();
  //response
  res.json({ all_qs: allDBMSQuestions });
};

module.exports = {
  new_dbms_qs: createDBMSQuestion,
  all_dbms_qs: getDBMSQuestion,
};
