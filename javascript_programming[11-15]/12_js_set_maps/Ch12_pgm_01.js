const mySet = new Set();
for (let i = 0; i <= 10; i++) {
  mySet.add(i);
}
mySet.delete(5);
mySet.clear();
const myMap = new Map();
for (const country of countries) {
  myMap.set(country, country.length);
}
