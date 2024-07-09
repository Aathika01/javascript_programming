var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

items.push("The Eiffel Tower", "The Great Wall of China");
items[5] = "The Taj Mahal";
items[6] = "The Colosseum";

showInfo = function (itemToShow) {
  console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

items.forEach(showInfo);

var totalLetters = function (array) {
  var total = 0;
  array.forEach(function (item) {
    total += item.length;
  });
  return total;
};

console.log("Total letters: " + totalLetters(items));