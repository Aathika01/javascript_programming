showSmaller(5, 10);
showSmaller(-5, -10);
showSmaller(0, 0);

var showLarger = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

showLarger(12, 3);
showLarger(-10, 3);

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, Math.min(num2, num3));

    console.log(smallest + " is the smallest of " + num1 + ", " + num2 + ", and " + num3);
};

showSmallest(12, 3, 5);
showSmallest(-10, 3, -5);