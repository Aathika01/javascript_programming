// 1. Change skills array to JSON using JSON.stringify()
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); 

const ageJSON = JSON.stringify(age);
console.log(ageJSON); 

const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON); 

const studentJSON = JSON.stringify(student);
console.log(studentJSON); 

const studentPartialJSON = JSON.stringify({
    firstName: student.firstName,
    lastName: student.lastName,
    skills: student.skills,
  });
  console.log(studentPartialJSON); 

const txtObj = JSON.parse(txt);

let maxSkills = 0;
let userWithMaxSkills = '';

for (const user in txtObj) {
  const skillsCount = txtObj[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    userWithMaxSkills = user;
  }
}

console.log(`The user with the most skills is ${userWithMaxSkills} with ${maxSkills} skills.`);
