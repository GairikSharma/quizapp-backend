const { verbalQuestion } = require("../../models/quizSchema");

//creating new verbal question
const createVERBALQuestion = async (req, res) => {
  //get the sent in data off req body
  const { question, options, correctOption, explaination, point, level } =
    req.body;

  //create a question with it
  const qs = await verbalQuestion.create({
    question: question,
    options: options,
    correctOption: correctOption,
    explaination: explaination,
    point: point,
    level: level,
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

//Updating the question
const updateVerbalQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, options, correctOption, explaination, point, level } =
    req.body;

  try {
    // Validate input data if necessary (optional)
    if (!id) {
      return res.status(400).send("ID parameter is required");
    }
    
    const updatedQuestion = await verbalQuestion.findByIdAndUpdate(
      id,
      {
        question: question,
        options: options,
        correctOption: correctOption,
        explaination: explaination,
        point: point,
        level: level,
      },
      { new: true } // Return the updated document
    );

    if (!updatedQuestion) {
      return res.status(404).send("Question not found");
    }

    res.json({ verbal: updatedQuestion });
  } catch (error) {
    res.status(500).send("Error updating question: " + error.message);
  }
};

module.exports = {
  new_verbal_qs: createVERBALQuestion,
  all_verbal_qs: getVERBALQuestion,
  update_verbal_qs: updateVerbalQuestion,
};
