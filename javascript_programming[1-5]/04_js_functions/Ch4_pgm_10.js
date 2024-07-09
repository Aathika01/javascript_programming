// Calling the showMovieInfo function

var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;

showMovieInfo();

var movie2 = {};

movie = movie2;

showMovieInfo(); 

var movie2 = {
  title: "The Incredibles",
  actors: "Craig T. Nelson, Holly Hunter",
  directors: "Brad Bird"
};

movie = movie2;

showMovieInfo(); 