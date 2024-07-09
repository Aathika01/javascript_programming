// Higher or Lower

var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber > secret) {
        return "Too high!";
      } else if (userNumber < secret) {
        return "Too low!";
      } else {
        return "Well done!";
      }
    };
  };
  
  var guess = getGuesser();
  
  
  
