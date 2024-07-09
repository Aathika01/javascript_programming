// Calling the sayHello function three times

var sayHello;

sayHello = function () {
  console.log("Hello Universe!\nWelcome to JavaScript!");
};

sayHello();
sayHello();
sayHello();

var printLetters;

printLetters = function (str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

printLetters("Hello World!");