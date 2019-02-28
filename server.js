const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/search");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/search", router);

app.listen(5000, (req, res) => {
  console.log("Did it connect?");
});
