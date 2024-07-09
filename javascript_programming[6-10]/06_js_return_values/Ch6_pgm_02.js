// Using an argument to determine the return value

var getHelloTo;
var fullMessage;

getHelloTo = function (name1, name2) {
    return "Hello to " + name1 + " and " + name2;
};

fullMessage = getHelloTo("Kandra", "Dax");

console.log(fullMessage);