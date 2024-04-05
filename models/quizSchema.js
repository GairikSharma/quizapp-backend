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
});

const oopSchema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
});

const dsaSchema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  explaination: String,
  point: Number,
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
