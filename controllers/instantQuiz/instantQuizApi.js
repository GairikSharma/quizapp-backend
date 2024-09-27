const { temp } = require("../../models/instantQuizSchema");

const createInstantQuiz = async (req, res) => {
  try {
    const { questions } = req.body;
    const quiz = await temp.create({ questions });
    res
      .status(201)
      .json({ message: "Quiz created successfully", instantQuiz: quiz });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating instant quiz", error: error });
  }
};

module.exports = {instantQuiz: createInstantQuiz}
