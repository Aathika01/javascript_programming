var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons:");
        this.showMoons();
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };
  
    this.showMoons = function () {
        for (var i = 0; i < this.moons.length; i++) {
            console.log("(" + i + ") " + this.moons[i]);
        }
    };
  
    this.getMoon = function (index) {
        return this.moons[index];
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Nereid");

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("None"); 
[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
    console.log();
});

console.log(planet1.getMoon(1)); 