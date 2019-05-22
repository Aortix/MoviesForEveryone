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
  let count = 0;
  let genreArray = req.body.genre.split(",");

  if (req.body.title.length > 0 && genreArray.length > 0 && req.body.year > 0) {
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
        let totalPages = data.total_pages;
        let totalResults = data.total_results;
        let currentPage = data.page;
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          if (movie.genre_ids.length === 0) {
            count = -1;
          }
          return count === genreArray.length;
        });
        let yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );

        let dataToReturn = genreFilteredData.filter(movie => {
          return yearRegex.test(movie.release_date) === true;
        });

        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: dataToReturn
        });
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
  let count = 0;
  let genreArray = req.body.genre.split(",");

  if (req.body.title.length > 0 && genreArray.length > 0 && req.body.year > 0) {
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
        let titleRegex = new RegExp("(" + req.body.title + ")+", "i");
        let totalPages = data.total_pages;
        let totalResults = data.total_results;
        let currentPage = data.page;
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return count === genreArray.length;
        });
        let yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );

        let dataToReturn = genreFilteredData.filter(movie => {
          return yearRegex.test(movie.release_date) === true;
        });

        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: dataToReturn
        });
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
  let count = 0;
  let genreArray = req.body.genre.split(",");

  if (req.body.title.length > 0 && genreArray.length > 0 && req.body.year > 0) {
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
        let totalPages = data.total_pages;
        let totalResults = data.total_results;
        let currentPage = data.page;
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return count === movie.genre_ids.length;
        });
        let yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );

        let dataToReturn = genreFilteredData.filter(movie => {
          return yearRegex.test(movie.release_date) === true;
        });

        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: dataToReturn
        });
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
  let count = 0;
  let genreArray = req.body.genre.split(",");

  if (req.body.title.length > 0 && genreArray.length > 0 && req.body.year > 0) {
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
        let titleRegex = new RegExp("(" + req.body.title + ")+", "i");
        let totalPages = data.total_pages;
        let totalResults = data.total_results;
        let currentPage = data.page;
        let titleFilteredData = data.results.filter(movie => {
          return titleRegex.test(movie.title);
        });
        let genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return count === movie.genre_ids.length;
        });
        let yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );

        let dataToReturn = genreFilteredData.filter(movie => {
          return yearRegex.test(movie.release_date) === true;
        });

        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: dataToReturn
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
});

const theMovieDbBaseImageUrl = "https://image.tmdb.org/t/p/w200/";

router.post("/image", (req, res) => {
  fetch(theMovieDbBaseImageUrl + `${req.body.imagePath}`)
    .then(data => res.send(data))
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
