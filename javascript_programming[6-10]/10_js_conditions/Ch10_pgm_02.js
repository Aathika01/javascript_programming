// Guess the number - the else clause

var secret = 8;

var guess = function (userNumber) {
  if (userNumber!== secret) {
    console.log("Unlucky, try again.");
  } else {
    console.log("Well done!");
  }
};



