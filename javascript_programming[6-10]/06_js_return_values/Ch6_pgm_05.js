// A function with three arguments

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
	var total = callOutCharge + costPerHour * numberOfHours;
	if (discount) {
		total -= discount;
	}
	return total;
};

console.log("$" + totalCost(30, 40, 12));

console.log("$" + totalCost(30, 40, 3, 20));