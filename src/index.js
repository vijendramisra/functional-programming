const compose2 = f => g => x => f(g(x));

const double = n => n * 2;
const inc = n => n + 1;
console.log(compose2(double)(inc)(3));
