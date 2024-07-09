//... (rest of the code remains the same)

player1.items.push("a shiny sword");
showPlayerInfo(player1, "*");

player1.items.pop();
showPlayerInfo(player1, "*");

var getPlayerItems = function (player) {
  var itemsString = "Items:" + spacer.newLine();

  player.items.forEach(function (item, i) {
    itemsString += "  " + (i + 1) + ". " + item + spacer.newLine();
  });

  return itemsString;
};

var showItem = function (player, itemNumber) {
  if (itemNumber > 0 && itemNumber <= player.items.length) {
    console.log("Item " + itemNumber + ": " + player.items[itemNumber - 1]);
  } else {
    console.log("Invalid item number");
  }
};

var addItem = function (player, itemTitle) {
  player.items.push(itemTitle);
  console.log(itemTitle + " added to inventory");
};

showItem(player1, 1);
addItem(player1, "a magical amulet");
showPlayerInfo(player1, "*");