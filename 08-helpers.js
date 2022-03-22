const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript'];

const includesString = tech.includes('Node');
const includesArray = array.includes('React');

console.log({ includesString });
console.log({ includesArray });

const startsWith = tech.startsWith('No');
const endsWith = tech.endsWith('.js');

console.log({ startsWith });
console.log({ endsWith });
