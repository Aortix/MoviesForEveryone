const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const genreIds = require("../movieGenres");

const theMovieDbBaseUrl =
  "https://api.themoviedb.org/3/search/movie?language=en-US";

router.get("/", (req, res) => {
  let count = 0;

  if (req.body.title !== "" && req.body.releaseYear !== "") {
    fetch(
      theMovieDbBaseUrl +
        `&api_key=${process.env.TMDB_API_KEY}&page=${req.body.page}&query=${
          req.body.title
        }&year=${req.body.releaseYear}`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        return res.send(
          JSON.stringify(
            data.results.filter(movie => {
              count = 0;
              for (let i = 0; i < req.body.genre.length; i++) {
                if (
                  movie.genre_ids.includes(genreIds[req.body.genre[i]]) ===
                  false
                ) {
                  count++;
                  i = req.body.genre.length;
                }
              }
              return count === 0;
            })
          )
        );
      })
      .catch(err => {
        console.log(err);
      });
  } else if (req.body.title !== "") {
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
        return res.send(
          JSON.stringify(
            data.results.filter(movie => {
              return (
                movie.genre_ids.find(genreIds[req.body.genre]) !== undefined
              );
            })
          )
        );
      })
      .catch(err => {
        console.log(err);
      });
  } else if (req.body.releaseYear !== null) {
    fetch(
      theMovieDbBaseUrl +
        `&api_key=${process.env.TMDB_API_KEY}&page=${req.body.page}&year=${
          req.body.releaseYear
        }`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        return res.send(JSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
      });
  }
});

module.exports = router;
