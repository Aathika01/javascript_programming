var planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
  
    this.removeMoon = function () {
        this.moons.pop();
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.addMoon("Io");
planet.addMoon("Europa");

planet.showPlanet();

var planet2 = new Planet("Xylophia-IV", 7, "Ice Giant");

planet2.addMoon("Nebulon");
planet2.addMoon("Glint");
planet2.addMoon("Frostbite");

planet2.showPlanet();

planet2.removeMoon();
planet2.showPlanet();