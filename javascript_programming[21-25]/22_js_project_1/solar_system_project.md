# Develop a small application which calculate a weight of an object in a certain planet. The gif image is not complete check the video in the starter file.

Sample Project GIF Image:

![solar_system_project](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_solar_system_day_4.1.gif)


To download images, click the below link:

https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master/24_Day_Project_solar_system/24_day_starter/images

To download background video, click the below link:

https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master/24_Day_Project_solar_system/24_day_starter/design

// Define the gravitational constants for each planet
const gravitationalConstants = {
  Earth: 9.81,
  Mars: 3.711,
  Jupiter: 24.79,
  Saturn: 10.44,
  Uranus: 8.87,
  Neptune: 11.15
};

// Function to calculate the weight of an object on a planet
function calculateWeight(mass, planet) {
  const gravitationalConstant = gravitationalConstants[planet];
  return mass * gravitationalConstant;
}

// Example usage
const mass = 70; // in kg
const planet = 'Mars';
const weight = calculateWeight(mass, planet);
console.log(`The weight of the object on ${planet} is ${weight} N`);