const user = {
  firstName: 'Luciano',
  lastName: 'Galvão',
  age: 27,
  instagram: '@lucianogalvaao',
  skills: ['Front-end', 'Mobile', 'Back-end'],
  active: false,
};

console.log(user);

const updatedUser = { ...user, active: true };

console.log(user);
console.log(updatedUser);
