// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const questionControllers = require("./controllers/apis");

const quantQuestionController = require("./controllers/quants/quantApi");
const verbalQuestionController = require("./controllers/verbal/verbalApi");
const oopQuestionController = require("./controllers/oops/oopApi");
const dsaQuestionController = require("./controllers/dsa/dsaApi");
const dbmsQuestionController = require("./controllers/dbms/dbmsApi");
const cnQuestionController = require("./controllers/computer-networks/cnApi");
const instantQuizController = require("./controllers/instantQuiz/instantQuizApi")
const participantController = require("./controllers/participants/participantsApi")


// Middlewares
app.use(express.json());
app.use(cors());

// Database connection
const connectToDatabase = require("./config/connection");
connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get requests for questions
app.get(
  "/all-questions-quantitative-aptitude",
  quantQuestionController.all_quant_qs
);
app.get("/all-questions-verbal", verbalQuestionController.all_verbal_qs);
app.get("/all-questions-computer-networks", cnQuestionController.all_cn_qs);
app.get("/all-questions-dbms", dbmsQuestionController.all_dbms_qs);
app.get("/all-questions-dsa", dsaQuestionController.all_dsa_qs);
app.get("/all-questions-oop", oopQuestionController.all_oop_qs);

// Post requests for adding new questions
app.post(
  "/new-question/quantitative-aptitude",
  quantQuestionController.new_quant_qs
);
app.post("/new-question/verbal", verbalQuestionController.new_verbal_qs);
app.post("/new-question/oop", oopQuestionController.new_oop_qs);
app.post("/new-question/dsa", dsaQuestionController.new_dsa_qs);
app.post("/new-question/dbms", dbmsQuestionController.new_dbms_qs);
app.post("/new-question/computer-networks", cnQuestionController.new_cn_qs);

// New post route to create an instant quiz
app.post("/create-instant-quiz", instantQuizController.instantQuiz);
// Creating new participant
app.post("/new-participant", participantController.participant);

// Put requests for updating questions
app.put(
  "/computer-networks-question/update/:id",
  cnQuestionController.update_cn_qs
);
app.put("/dbms-question/update/:id", dbmsQuestionController.update_dbms_qs);
app.put("/dsa-question/update/:id", dsaQuestionController.update_dsa_qs);
app.put("/oop-question/update/:id", oopQuestionController.update_oop_qs);
app.put(
  "/quantitative-aptitude-question/update:id",
  quantQuestionController.update_quant_question
);
app.put(
  "/verbal-question/update/:id",
  verbalQuestionController.update_verbal_qs
);

// Starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server running at PORT ${process.env.PORT}`);
});
