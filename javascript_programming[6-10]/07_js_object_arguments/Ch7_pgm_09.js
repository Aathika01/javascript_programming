var message = "We choose to go to the Moon!";
var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index " + goIndex);

var message = "We choose to go to the Moon!";
var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6)); 

var message = "We choose to go to the Moon!";
var lastIndex = message.lastIndexOf("oo");
console.log("The 'oo' in 'Moon' is at index " + lastIndex);