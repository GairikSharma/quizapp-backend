const { quantQuestion } = require("../../models/quizSchema");

//creating a quant question
const createQANTQuestion = async (req, res) => {
  //get the sent in data off req body

  const { question, options, correctOption, explaination, point, level } =
    req.body;

  //create a question with it
  const qs = await quantQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
    point: point,
    level: level,
  });
  //respond with new question
  res.json({ quants: qs });
};

//getting all quant questions
const getQUANTQuestion = async (req, res) => {
  //finding all the questions
  const allQUANTQuestions = await quantQuestion.find();
  //response
  res.json({ all_qs: allQUANTQuestions });
};

//Updating questions
const updateQuantQuestion = async (req, res) => {
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
  new_quant_qs: createQANTQuestion,
  all_quant_qs: getQUANTQuestion,
  update_quant_question: updateQuantQuestion,
};
