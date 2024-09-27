const { Participant } = require("../../models/participantsSchema");

const createParticipants = async (req, res) => {
  try {
    const { email, score } = req.body;
    const participant = await Participant.create({
      email: email,
      score: score,
    });
    res.status(201).json({ message: "Participant creatred successfully" });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error while creating participant", error: error });
  }
};


module.exports = {participant: createParticipants}