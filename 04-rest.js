const user = {
  firstName: 'Luciano',
  lastName: 'Galvão',
  age: 27,
  instagram: '@lucianogalvaao',
  skills: ['Front-end', 'Mobile', 'Back-end'],
};

console.log(user);

// Rest Operator = Resto
const { firstName, skills, ...restoUser } = user;
const [primary, secondary, ...restoSkills] = skills;

console.log(firstName, primary, secondary, restoUser, restoSkills);
