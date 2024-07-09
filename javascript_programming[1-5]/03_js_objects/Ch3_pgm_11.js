// Using a property in a calculation

var player1;
var player2;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score * 1.1;
console.log(player1.name + " has scored " + player1.score);

player2 = {
	  name: "Sam",
	  score: 0
};

player2.score = player2.score + 75;
console.log(player2.name + " has scored " + player2.score);

var totalScore = player1.score + player2.score;
console.log("The total score of " + player1.name + " and " + player2.name + " is " + totalScore);