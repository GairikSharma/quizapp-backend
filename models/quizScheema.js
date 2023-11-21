const mongoose = require('mongoose')

const quizScheema = new mongoose.Schema({
  title: String,
  message: String
});


const Message = mongoose.model('message', quizScheema);
module.exports = Message