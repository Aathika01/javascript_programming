for (var i = -20; i <= 60; i += 10) {
    console.log("Line length: " + i);
    console.log(line(i));
    console.log();
}

var spaces = function (numSpaces) {
    numSpaces = Math.max(0, numSpaces);
    numSpaces = Math.min(40, numSpaces);
    return Array(numSpaces + 1).join(" ");
};

console.log(spaces(10));
console.log(spaces(20));
console.log(spaces(30));

var emptyBox = function (width) {
    width = Math.max(2, width);
    width = Math.min(40, width);
    var topAndBottom = "=" + Array(width - 1).join("=") + "=";
    var middle = "= " + Array(width - 2).join(" ") + " =";
    for (var i = 0; i < 5; i++) {
        if (i === 0 || i === 4) {
            console.log(topAndBottom);
        } else {
            console.log(middle);
        }
    }
};

emptyBox(12);