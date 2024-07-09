var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    var index = dayInWeek - 1;
    if (index > 4) {
      index -= 2; 
    }
    var visitorReport;
  
    visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];
  
    return visitorReport;
  };

  var getMonthlyVisitorReport = function (monthArray, week, day) {
    var weekArray = monthArray[week - 1];
    return getVisitorReport(weekArray, day);
  };

  var week1 = [354, 132, 210, 221, 481, 190, 120];
var week2 = [410, 250, 320, 180, 420, 220, 150];
var week3 = [380, 200, 240, 160, 400, 200, 140];
var week4 = [450, 280, 300, 200, 480, 240, 160];

var monthArray = [week1, week2, week3, week4];

console.log(getMonthlyVisitorReport(monthArray, 2, 3));

console.log(getMonthlyVisitorReport(monthArray, 4, 5));

console.log(getMonthlyVisitorReport(monthArray, 1, 7));