// Declare number1, number2, and result variables
var number1;
var number2;
var result;

number1 = 5;
number2 = 10;

var findTotal;
var displayMenu;

findTotal = function () {
  result = number1 + number2;
};

displayMenu = function () {
  console.log("Please choose an option:");
  console.log("(1) Print log");
  console.log("(2) Upload file");
  console.log("(9) Quit");
};

findTotal();

console.log("The result is: " + result);

displayMenu();