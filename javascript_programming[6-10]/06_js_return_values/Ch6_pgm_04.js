// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);

console.log('The sum of 50 and 23 is ' + sum);

var sum2 = add(100, 25);
console.log('The sum of 100 and 25 is ' + sum2);

var sum3 = add(10, add(20, 30));
console.log('The sum of 10, 20, and 30 is ' + sum3);

var addThree;

addThree = function (number1, number2, number3) {
	var total = number1 + number2 + number3;

	return total;
};

var sum4 = addThree(10, 20, 30);
console.log('The sum of 10, 20, and 30 is ' + sum4);