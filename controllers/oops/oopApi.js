const { oopQuestion } = require("../../models/quizSchema");

//creating new oop question
const createOOPQuestion = async (req, res) => {
  //get the sent in data off req body
  const { question, code, options, correctOption, explaination, point, level } =
    req.body;

  //create a question with it
  const qs = await oopQuestion.create({
    question: question,
    code: code,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
    point: point,
    level: level,
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

//Update question
const updateQuantQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, code, options, correctOption, explaination, point, level } =
    req.body;
  try {
    if (!id) {
      return res.status(400).send("ID parameter is required");
    }
    const updatedQuestion = await oopQuestion.findByIdAndUpdate(
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
  new_oop_qs: createOOPQuestion,
  all_oop_qs: getOOPQuestion,
  update_oop_qs: updateQuantQuestion,
};
