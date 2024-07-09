var cube;

cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};
cube(2);
cube(3);
cube(4);
cube(5);
var squareRoot;

squareRoot = function (number) {
  var result;
  result = Math.sqrt(number);
  console.log("The square root of " + number + " is " + result);
};
squareRoot(9);
squareRoot(16);
squareRoot(25);
squareRoot(36);