var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

items.push("The Eiffel Tower");
console.log(items.join(" and "));

items[2] = "The Taj Mahal";
console.log(items.join(" and "));

items.push("The Great Wall of China", "The Colosseum", "The Acropolis");
console.log(items.join(" and "));