const compose2 = f => g => x => f(g(x));

const double = n => n * 2;
const inc = n => n + 1;
console.log(compose2(double)(inc)(3));

// Objects can be easliy composed

const a = "a";
const oA = { a };

const b = "b";
const oB = { b };

const c = { ...oA, ...oB };
const d = Object.assign({}, oA, oB);

console.log(c, d);
