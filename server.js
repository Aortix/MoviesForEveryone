const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/search");

const app = express();

app.use(bodyParser.json());

app.use("/search", router);

app.listen(3000, (req, res) => {
  console.log("Did it connect?");
});
