There are three important points that make lambda calculus special:

1. Functions are always anonymous. In JavaScript, the right side of const sum = (x, y) => x + y is the anonymous function expression (x, y) => x + y.

2. Functions in lambda calculus only accept a single input. They’re unary. If you need more than one parameter, the function will take one input and return a new function that takes the next, and so on. The n-ary function (x, y) => x + y can be expressed as a unary function like: x => y => x + y. This transformation from an n-ary function to a unary function is known as currying.

3. Functions are first-class, meaning that functions can be used as inputs to other functions, and functions can return functions.
