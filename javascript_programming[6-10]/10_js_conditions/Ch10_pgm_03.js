// Guess the number - using local scope

var getGuesser = function () {
    var secret = 8;
  
    return function (userNumber) {
      if (userNumber === secret) {
        console.log("Well done!");
      } else if (userNumber > secret) {
        console.log("Too high!");
      } else {
        console.log("Too low!");
      }
    };
  };
  
  var guess = getGuesser();
  
