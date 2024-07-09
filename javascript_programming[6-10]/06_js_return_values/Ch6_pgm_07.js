var getPlayerName;

getPlayerName = function (playerName) {
    var prefixSuffix = "==== ";
    var border = "\n| \n| " + playerName + "\n| \n";
    return prefixSuffix + playerName + " ==== " + "\n" + border;
};

console.log(getPlayerName("Kandra"));
console.log(getPlayerName("Kiki"));
console.log(getPlayerName("Mahesha"));
console.log(getPlayerName("Jahver"));