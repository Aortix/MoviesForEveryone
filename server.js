const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/search");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/search", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(cors());
}

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => { });
