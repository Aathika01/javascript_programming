var planet1;
var planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Earth",
    position: 3,
    type: "Terrestrial",
    radius: 6371,
    sizeRank: 5
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position + ", a " + planet.type + " with a radius of " + planet.radius + " km, ranked " + planet.sizeRank + " in size.";
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));