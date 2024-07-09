var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var getDay = function(dayNumber) {
  return days[dayNumber - 1];
};

console.log(getDay(4));