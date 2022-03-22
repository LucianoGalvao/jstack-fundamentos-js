const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find -> Pesquisar
const find = array.find((product) => product.price > 1000);
console.log({ find });

// .findIndex -> Pesquisar a posição
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
console.log({ findIndex });

// .some -> Se algum item do array é true
const some = array.some((product) => product.price < 1000);
console.log({ some });

// .every -> Se todos os itens do array são true
const every = array.every((product) => product.price >= 1000);
console.log({ every });

// .map -> Percorre e traz um novo array
const map = array.map((product) => ({
  ...product,
  subtotal: product.price * product.quantity,
}));
console.log(map);

// .filter -> Filtra e retorna o valor esperado
const filter = array.filter((product) => product.quantity > 1);
console.log({ filter });

// .reduce -> "Reduz" para que possa manipular e transformar os dados
const reduce = array.reduce((accumulator, product) => {
  return accumulator + product.price * product.quantity;
}, 0);
console.log({ reduce });
