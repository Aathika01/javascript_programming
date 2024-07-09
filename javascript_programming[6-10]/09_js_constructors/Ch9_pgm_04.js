var planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet = new planet( "Jupiter", 5, "Gas Giant" );

planet.showPlanet();

var planet2 = new planet("Saturn", 6, "Gas Giant");

planet2.showPlanet();