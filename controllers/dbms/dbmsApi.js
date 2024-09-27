const { dbmsQuestion } = require("../../models/quizSchema");

//creating new dbms question
const createDBMSQuestion = async (req, res) => {
  //get the sent in data off req body
  const { question, options, correctOption, explaination, point, level } =
    req.body;

  //create a question with it
  const qs = await dbmsQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
    point: point,
    level: level,
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

//Update questions
const updateDBMSQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, options, correctOption, explaination, point, level } =
    req.body;
  try {
    if (!id) {
      return res.status(400).send("ID parameter is required");
    }
    const updatedQuestion = await dbmsQuestion.findByIdAndUpdate(
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
  new_dbms_qs: createDBMSQuestion,
  all_dbms_qs: getDBMSQuestion,
  update_dbms_qs: updateDBMSQuestion,
};
