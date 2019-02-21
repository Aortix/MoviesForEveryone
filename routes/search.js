const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const genreIds = require("../movieGenres");

const theMovieDbBaseUrl =
  "https://api.themoviedb.org/3/search/movie?language=en-US";

//Get request for a movie search using filters such as title, release year, and genre
router.get("/", (req, res) => {
  if (
    req.body.title.length === 1 &&
    req.body.genre.length > 0 &&
    req.body.year > 0
  ) {
    fetch(
      theMovieDbBaseUrl +
        `&api_key=${process.env.TMDB_API_KEY}&page=${req.body.page}&query=${
          req.body.title
        }`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        let titleRegex = new RegExp("^" + req.body.title + "+", "i");
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter(movie => {
          let count = 0;
          for (let i = 0; i < req.body.genre.length; i++) {
            if (
              movie.genre_ids.includes(genreIds[req.body.genre[i]]) === false
            ) {
              count++;
              i = req.body.genre.length;
            }
          }
          return count === 0;
        });
        let yearRegex = new RegExp(
          "^" + req.body.year + "[0-9]{2}-[0-9]{2}-[0-9]{2}$",
          "g"
        );
        res.send(
          JSON.stringify(
            genreFilteredData.filter(movie => {
              return yearRegex.test(movie.release_date);
            })
          )
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
});

module.exports = router;
