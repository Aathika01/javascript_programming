// Guess the number

var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else if (userNumber > secret) {
    console.log("Too high!");
  } else {
    console.log("Too low!");
  }
};



