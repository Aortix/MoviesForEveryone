const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const genreIds = require("../client/src/movieGenres");

const randomTitles = require("../randomTitles");

const theMovieDbBaseUrl =
  "https://api.themoviedb.org/3/search/movie?language=en-US";

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that START with the string supplied by the user
//This request makes it so the search will display the genres supplied by the user ALONG with additional genres if they are included
router.post("/standard", (req, res) => {
  let count = 0;

  if (req.body.title === "") {
    var newTitle = randomTitles[Math.floor(Math.random() * 16)];
  } else {
    var newTitle = req.body.title;
  }

  if (req.body.genre.length === 0) {
    var genreArray = null;
  } else {
    var genreArray = req.body.genre.split(",");
  }

  fetch(
    theMovieDbBaseUrl +
      `&api_key=${process.env.TMDB_API_KEY}&page=${
        req.body.page
      }&query=${newTitle}`
  )
    .then(data => {
      return data.text();
    })
    .then(data => {
      return JSON.parse(data);
    })
    .then(data => {
      let titleRegex = new RegExp("^(" + newTitle + ")+", "i");
      let totalPages = data.total_pages;
      let totalResults = data.total_results;
      let currentPage = data.page;
      if (data.results == undefined) {
        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: {}
        });
      }
      let titleFilteredData = data.results.filter(movie => {
        return titleRegex.test(movie.title);
      });
      if (genreArray === null) {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          if (movie.genre_ids.length === 0) {
            return false;
          } else {
            return true;
          }
        });
      } else {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.length === 0) {
              count = -1;
            } else if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return count === genreArray.length;
        });
      }
      if (req.body.year == 0) {
        var yearRegex = new RegExp("[0-9]+", "gm");
      } else {
        var yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );
      }
      if (req.body.year === 0) {
        var dataToReturn = Array.from(genreFilteredData);
      } else {
        var dataToReturn = genreFilteredData.filter(movie => {
          return yearRegex.test(movie.release_date) === true;
        });
      }

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
  //}
});

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that CONTAIN the string supplied by the user
//This request makes it so the search will display the genres supplied by the user ALONG with additional genres if they are included
router.post("/title-contain", (req, res) => {
  console.log("Title contain search");
  let count = 0;

  if (req.body.title === "") {
    var newTitle = randomTitles[Math.floor(Math.random() * 16)];
  } else {
    var newTitle = req.body.title;
  }

  if (req.body.genre.length === 0) {
    var genreArray = null;
  } else {
    var genreArray = req.body.genre.split(",");
  }

  fetch(
    theMovieDbBaseUrl +
      `&api_key=${process.env.TMDB_API_KEY}&page=${
        req.body.page
      }&query=${newTitle}`
  )
    .then(data => {
      return data.text();
    })
    .then(data => {
      return JSON.parse(data);
    })
    .then(data => {
      let titleRegex = new RegExp("(" + newTitle + ")+", "i");
      let totalPages = data.total_pages;
      let totalResults = data.total_results;
      let currentPage = data.page;
      if (data.results == undefined) {
        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: {}
        });
      }
      let titleFilteredData = data.results.filter(movie => {
        return titleRegex.test(movie.title);
      });
      if (genreArray === null) {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          if (movie.genre_ids.length === 0) {
            return false;
          } else {
            return true;
          }
        });
      } else {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.length === 0) {
              count = -1;
            } else if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return count === genreArray.length;
        });
      }

      if (req.body.year == 0) {
        var yearRegex = new RegExp("[0-9]+", "gm");
      } else {
        var yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );
      }

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
});

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that START with the string supplied by the user
//This request makes it so the search will display the movies with the genres that are supplied by the user that have NO additional genres
router.post("/genre-specific", (req, res) => {
  console.log("Genre specific search");
  let count = 0;

  if (req.body.title === "") {
    var newTitle = randomTitles[Math.floor(Math.random() * 16)];
  } else {
    var newTitle = req.body.title;
  }

  if (req.body.genre.length === 0) {
    var genreArray = null;
  } else {
    var genreArray = req.body.genre.split(",");
  }

  fetch(
    theMovieDbBaseUrl +
      `&api_key=${process.env.TMDB_API_KEY}&page=${
        req.body.page
      }&query=${newTitle}`
  )
    .then(data => {
      return data.text();
    })
    .then(data => {
      return JSON.parse(data);
    })
    .then(data => {
      let titleRegex = new RegExp("^(" + newTitle + ")+", "i");
      let totalPages = data.total_pages;
      let totalResults = data.total_results;
      let currentPage = data.page;
      if (data.results == undefined) {
        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: {}
        });
      }
      let titleFilteredData = data.results.filter(movie => {
        return titleRegex.test(movie.title);
      });
      if (genreArray === null) {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          if (movie.genre_ids.length === 0) {
            return false;
          } else {
            return true;
          }
        });
      } else {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.length === 0) {
              count = -1;
            } else if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return (
            count === genreArray.length &&
            movie.genre_ids.length === genreArray.length
          );
        });
      }

      if (req.body.year === 0) {
        var yearRegex = new RegExp("[0-9]+", "gm");
      } else {
        var yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );
      }

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
});

//Get request for a movie search using filters such as title, release year, and genre.
//This request makes it so the search will display titles that START with the string supplied by the user
//This request makes it so the search will display the movies with the genres that are supplied by the user that have NO additional genres
router.post("/title-contain-genre-specific", (req, res) => {
  console.log("Title contain and genre specific search");
  let count = 0;

  if (req.body.title === "") {
    var newTitle = randomTitles[Math.floor(Math.random() * 16)];
  } else {
    var newTitle = req.body.title;
  }

  if (req.body.genre.length === 0) {
    var genreArray = null;
  } else {
    var genreArray = req.body.genre.split(",");
  }

  fetch(
    theMovieDbBaseUrl +
      `&api_key=${process.env.TMDB_API_KEY}&page=${
        req.body.page
      }&query=${newTitle}`
  )
    .then(data => {
      return data.text();
    })
    .then(data => {
      return JSON.parse(data);
    })
    .then(data => {
      let titleRegex = new RegExp("(" + newTitle + ")+", "i");
      let totalPages = data.total_pages;
      let totalResults = data.total_results;
      let currentPage = data.page;
      if (data.results == undefined) {
        return res.send({
          currentPage,
          total_results: totalResults,
          total_pages: totalPages,
          data: {}
        });
      }
      let titleFilteredData = data.results.filter(movie => {
        return titleRegex.test(movie.title);
      });

      if (genreArray === null) {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          if (movie.genre_ids.length === 0) {
            return false;
          } else {
            return true;
          }
        });
      } else {
        var genreFilteredData = titleFilteredData.filter((movie, index) => {
          count = 0;
          genreArray.forEach(genre => {
            if (movie.genre_ids.length === 0) {
              count = -1;
            } else if (movie.genre_ids.includes(genreIds[genre])) {
              count++;
            }
          });
          return (
            count === genreArray.length &&
            movie.genre_ids.length === genreArray.length
          );
        });
      }

      if (req.body.year === 0) {
        var yearRegex = new RegExp("[0-9]+", "gm");
      } else {
        var yearRegex = new RegExp(
          `${req.body.year}[0-9]{2}-[0-9]{2}-[0-9]{2}`,
          "gm"
        );
      }
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
