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


//Testing
app.get("/" , (req, res) => {
  res.send (`Hello from ${process.env.PORT}`)
})
app.get("/all-questions", questionControllers.getAllQuestions)
app.post("/new-question", questionControllers.newQuestion)

app.listen(process.env.PORT, () => {
  console.log(`server running at PORT ${process.env.PORT}`);
});
