var rectangles = [
    { length: 10, width: 5 },
    { length: 8, width: 3 },
    { length: 12, width: 7 }
  ];
  
  var assignArea = function (rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
  };
  
  var showInfo = function (rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
    console.log("---");
  };
  
  rectangles.forEach(function (rectangle) {
    assignArea(rectangle);
    showInfo(rectangle);
  });