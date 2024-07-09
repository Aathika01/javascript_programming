point2 = move(point1, { x: 3, y: 1 });
var reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

point3 = reflectX(point1);
showPoint(point3);
var rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point4 = rotate90(point1);
showPoint(point4);