const union = [...new Set([...a, ...b])];
console.log(union); 
const intersection = [...new Set(a)].filter(x => new Set(b).has(x));
console.log(intersection);
const withB = a.filter(x => b.includes(x));
console.log(withB); 