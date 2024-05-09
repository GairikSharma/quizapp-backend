const mongoose = require("mongoose");

const qunatSchema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
  level: String
});

const verbalSchema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
  level: String
});

const oopSchema = new mongoose.Schema({
  question: String,
  code: {
    type: String,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
  level: String
});

const dsaSchema = new mongoose.Schema({
  question: String,
  code: {
    type: String,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
  level: String
});

const dbmsSchema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
  level: String
});

const cnSchema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
  level: String
});

const quantQuestion = mongoose.model("quanttitative_aptitude", qunatSchema);
const verbalQuestion = mongoose.model("verbal", verbalSchema);
const oopQuestion = mongoose.model("oop", oopSchema);
const dsaQuestion = mongoose.model("dsa", dsaSchema);
const dbmsQuestion = mongoose.model("dbms", dbmsSchema);
const cnQuestion = mongoose.model("computer_networks", cnSchema);

module.exports = {
  quantQuestion,
  verbalQuestion,
  oopQuestion,
  dsaQuestion,
  dbmsQuestion,
  cnQuestion,
};
