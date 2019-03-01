const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const genreIds = require("../client/src/movieGenres");

const theMovieDbBaseUrl =
  "https://api.themoviedb.org/3/search/movie?language=en-US";

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that START with the string supplied by the user
//This request makes it so the search will display the genres supplied by the user ALONG with additional genres if they are included
router.post("/standard", (req, res) => {
  console.log("Did this get pinged?");
  if (
    req.body.title.length > 0 &&
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
        return data.text();
      })
      .then(data => {
        return JSON.parse(data);
      })
      .then(data => {
        let titleRegex = new RegExp("^(" + req.body.title + ")+", "i");
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter(movie => {
          let count = 0;
          for (let i = 0; i < req.body.genre.length; i++) {
            if (movie.genre_ids.includes(genreIds[req.body.genre[i]])) {
              count++;
            }
          }
          return count === req.body.genre.length;
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

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that CONTAIN the string supplied by the user
//This request makes it so the search will display the genres supplied by the user ALONG with additional genres if they are included
router.post("/title-contain", (req, res) => {
  if (
    req.body.title.length > 0 &&
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
        let titleRegex = new RegExp("(" + req.body.title + ")+", "i");
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter(movie => {
          let count = 0;
          for (let i = 0; i < req.body.genre.length; i++) {
            if (movie.genre_ids.includes(genreIds[req.body.genre[i]])) {
              count++;
            }
          }
          return count === req.body.genre.length;
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

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that START with the string supplied by the user
//This request makes it so the search will display the movies with the genres that are supplied by the user that have NO additional genres
router.post("/genre-specific", (req, res) => {
  if (
    req.body.title.length > 0 &&
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
        let titleRegex = new RegExp("^(" + req.body.title + ")+", "i");
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter(movie => {
          let count = 0;
          for (let i = 0; i < movie.genre_ids.length; i++) {
            if (movie.genre_ids.includes(genreIds[req.body.genre[i]])) {
              count++;
            }
          }
          if (count === 0) {
            count--;
          }
          return count === movie.genre_ids.length;
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

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that START with the string supplied by the user
//This request makes it so the search will display the movies with the genres that are supplied by the user that have NO additional genres
router.post("/title-contain-genre-specific", (req, res) => {
  if (
    req.body.title.length > 0 &&
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
        let titleRegex = new RegExp("(" + req.body.title + ")+", "i");
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter(movie => {
          let count = 0;
          for (let i = 0; i < movie.genre_ids.length; i++) {
            if (movie.genre_ids.includes(genreIds[req.body.genre[i]])) {
              count++;
            }
          }
          if (count === 0) {
            count--;
          }
          return count === movie.genre_ids.length;
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
