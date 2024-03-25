//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const questionControllers = require('./controllers/apis')

//Middlewares
app.use(express.json());
app.use(cors());

//Database connection
const connectToDatabase = require("./config/connection");
connectToDatabase();


app.get("/all-questions", questionControllers.getAllQuestions)
app.post("/new-question", questionControllers.newQuestion)
app.post("/new-question/oop", questionControllers.newOOPQuestion)
app.post("/new-question/dsa", questionControllers.newDSAQuestion)

app.listen(process.env.PORT, () => {
  console.log(`server running at PORT ${process.env.PORT}`);
});
