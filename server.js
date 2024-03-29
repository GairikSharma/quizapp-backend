//Load env variables
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

//Middlewares
app.use(express.json());
app.use(cors());

//Database connection
const connectToDatabase = require("./config/connection");
connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get(
  "/all-questions-quantitative-aptitude",
  quantQuestionController.all_quant_qs
);
app.get("/all-questions-verbal", verbalQuestionController.all_verbal_qs);
app.get("/all-questions-computer-networks", cnQuestionController.all_cn_qs);
app.get("/all-questions-dbms", dbmsQuestionController.all_dbms_qs);
app.get("/all-questions-dsa", dsaQuestionController.all_dsa_qs);
app.get("/all-questions-oop", oopQuestionController.all_oop_qs);

// "/all-questions?topic=oop"
// "all-questions/:topic"

app.post("/new-question/:topic", questionControllers.newQuestion);

// app.post(
//   "/new-question/quantitative-aptitude",
//   quantQuestionController.new_quant_qs
// );
// app.post("/new-question/verbal", verbalQuestionController.new_verbal_qs);
// app.post("/new-question/oop", oopQuestionController.new_oop_qs);
// app.post("/new-question/dsa", dsaQuestionController.new_dsa_qs);
// app.post("/new-question/dbms", dbmsQuestionController.new_dbms_qs);
// app.post("/new-question/computer-networks", cnQuestionController.new_cn_qs);

app.listen(process.env.PORT, () => {
  console.log(`server running at PORT ${process.env.PORT}`);
});
