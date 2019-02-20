const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    type: "GET",
    testing: "Yes"
  });
});

router.post("/addmovie", (req, res) => {
  res.send({
    type: "POST",
    movie: req.body.movie,
    genre: req.body.genre
  });
});

module.exports = router;
