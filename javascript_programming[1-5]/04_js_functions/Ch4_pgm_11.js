// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
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

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1 = {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
};

var question2 = {
    text: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: "Jupiter"
};

var question3 = {
    text: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    answer: "Vatican City"
};

var question;
var showQuestion;

showQuestion = function () {
    console.log(question.text);
    console.log("Options:");
    for (var i = 0; i < question.options.length; i++) {
        console.log((i + 1) + ". " + question.options[i]);
    }
    console.log("Answer: " + question.answer);
    console.log("------------------------------");
};

question = question1;
showQuestion();

question = question2;
showQuestion();

question = question3;
showQuestion();