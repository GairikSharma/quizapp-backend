const { cnQuestion } = require("../../models/quizSchema");

//creating new cn question
const createDBMSQuestion = async (req, res) => {
  //get the sent in data off req body
  const { question, options, correctOption, explaination, point, level } =
    req.body;

  //create a question with it
  const qs = await cnQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    point: point,
    explaination: explaination,
    level: level,
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

//Update question
const updateCNQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, options, correctOption, explaination, point, level } =
    req.body;
  try {
    if (!id) {
      return res.status(400).send("ID parameter is required");
    }
    const updatedQuestion = await quantQuestion.findByIdAndUpdate(
      id,
      {
        question: question,
        options: options,
        correctOption: correctOption,
        explaination: explaination,
        point: point,
        level: level,
      },
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).send("Question not found");
    }
  } catch (error) {
    res.status(500).send("Error updating question: " + error.message);
  }
};

module.exports = {
  new_cn_qs: createDBMSQuestion,
  all_cn_qs: getCNQuestion,
  update_cn_qs: updateCNQuestion,
};
