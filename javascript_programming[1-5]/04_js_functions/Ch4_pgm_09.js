// Using a function to display object properties

var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

showMovieInfo();

var movie;

showMovieInfo();

var movie = {};

showMovieInfo();

var movie = {
  title: "The Shawshank Redemption",
  actors: "Tim Robbins, Morgan Freeman",
  directors: "Frank Darabont"
};

showMovieInfo();