//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");

//Middlewares
app.use(express.json());
app.use(cors());

//Database connection
const connectToDatabase = require("./config/connection");
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server running at PORT ${process.env.PORT}`);
});
