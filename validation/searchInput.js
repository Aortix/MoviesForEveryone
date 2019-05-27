const validation = (title, genre, year, page) => {
  const errors = { noErrors: true };

  titleRegex = /^[a-zA-Z0-9&_,:!?'*-\.\s]*$/;
  genreRegex = /^[a-zA-Z,\s]+$/;
  pageRegex = /^[0-9]+$/;
  yearRegex = /^[0-9]+$/;

  genreTooManyRegex = /[a-zA-z\s]+,[a-zA-z\s]+,[a-zA-z\s]+,[a-zA-z\s]+/;

  if (typeof title !== "string") {
    errors.title = "This is not a string.";
    errors.noErrors = false;
  } else if (titleRegex.test(title) !== true) {
    errors.title = "Certain character/s not allowed.";
    errors.noErrors = false;
  } else if (title.length <= 0) {
    errors.title = "You sent nothing. Try again.";
    errors.noErrors = false;
  } else if (title.length >= 50) {
    errors.title = "Title can be no longer than 50 characters.";
    errors.noErrors = false;
  }
  if (typeof genre !== "string") {
    errors.genre = "This is not a string.";
    errors.noErrors = false;
  } else if (genre.length === 0) {
  } else if (genreRegex.test(genre) !== true) {
    errors.genre = "Certain character/s not allowed.";
    errors.noErrors = false;
  } else if (genre.length <= 0) {
    errors.genre = "You sent nothing. Try again.";
    errors.noErrors = false;
  } else if (genreTooManyRegex.test(genre) === true) {
    errors.genre = "Three genres max.";
    errors.noErrors = false;
  } else if (genre.length > 50) {
    errors.genre = "Genre list too long.";
    errors.noErrors = false;
  }

  if (typeof page !== "number") {
    errors.page = "This is not a number.";
    errors.noErrors = false;
  } else if (pageRegex.test(page) !== true) {
    errors.page = "Numbers only.";
    errors.noErrors = false;
  } else if (page < 0) {
    errors.page = "Below 0? Try again.";
    errors.noErrors = false;
  } else if (page >= 2000) {
    errors.page = "You've reached the limit. Restart search.";
    errors.noErrors = false;
  }

  if (typeof year !== "number") {
    errors.year = "This is not a number.";
    errors.noErrors = false;
  } else if (yearRegex.test(year) !== true) {
    errors.year = "Numbers only.";
    errors.noErrors = false;
  } else if (year !== 0 && year !== 19 && year !== 20) {
    errors.year = "Not a valid year. Try again.";
    errors.noErrors = false;
  }
  return errors;
};

module.exports = validation;
