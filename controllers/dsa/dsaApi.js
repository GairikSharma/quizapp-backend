const { dsaQuestion } = require("../../models/quizSchema");

//creating new dsa question
const createDSAQuestion = async (req, res) => {
  //get the sent in data off req body
  const { question, code, options, correctOption, explaination, point, level } =
    req.body;

  //create a question with it
  const qs = await dsaQuestion.create({
    question: question,
    code: code,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
    point: point,
    level: level,
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

//Update question
const updatDsaQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, code, options, correctOption, explaination, point, level } =
    req.body;
  try {
    if (!id) {
      return res.status(400).send("ID parameter is required");
    }
    const updatedQuestion = await dsaQuestion.findByIdAndUpdate(
      id,
      {
        question: question,
        code: code,
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
  new_dsa_qs: createDSAQuestion,
  all_dsa_qs: getDSAQuestion,
  update_dsa_qs: updatDsaQuestion,
};
