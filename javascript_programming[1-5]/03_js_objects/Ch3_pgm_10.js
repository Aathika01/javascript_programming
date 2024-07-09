// Using dot notation to update a property

var player1;

player1 = {
    name: "Max",
    attempted: 0,
    correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;

console.log("Initial player1 details:");
console.log("Name: " + player1.name);
console.log("Attempted: " + player1.attempted);
console.log("Correct: " + player1.correct);
console.log("Score: " + player1.score);

console.log("Updated player1 details:");
console.log("Name: " + player1.name);
console.log("Attempted: " + player1.attempted);
console.log("Correct: " + player1.correct);
console.log("Score: " + player1.score);