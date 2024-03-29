const { new_cn_qs } = require("./computer-networks/cnApi");
const { new_dbms_qs } = require("./dbms/dbmsApi");
const { new_dsa_qs } = require("./dsa/dsaApi");
const { new_oop_qs } = require("./oops/oopApi");
const { new_quant_qs } = require("./quants/quantApi");
const { new_verbal_qs } = require("./verbal/verbalApi");

const createQuestionByTopic = {
  "quantitative-aptitude": new_quant_qs,
  dsa: new_dsa_qs,
  oop: new_oop_qs,
  dbms: new_dbms_qs,
  "computer-networks": new_cn_qs,
  verbal: new_verbal_qs,
};

//Create API (quiz scheema)
const createQuestion = async (req, res) => {
  const topic = req.params["topic"];

  await createQuestionByTopic[topic](req, res);

  //get the sent in data off req body
  // const question = req.body.question;
  // const options = req.body.options;
  // const point = req.body.point;
  // const correctOption = req.body.correctOptionIndex;
  // //create a question with it
  // const newQuestion = await QuizQuestion.create({
  //   question: question,
  //   options: options,
  //   point: point,
  //   correctOptionIndex: correctOption,
  // });
  // //respond with new question
  // res.json({ quizes: newQuestion });
};

//Read API
const getQuestion = async (req, res) => {
  //finding all the questions
  const allQuestions = await QuizQuestion.find();
  //response
  res.json({ allquestions: allQuestions });
};

module.exports = {
  newQuestion: createQuestion,
  getAllQuestions: getQuestion,
};
