### There are three important points that make lambda calculus special:

1. Functions are always anonymous. In JavaScript, the right side of const sum = (x, y) => x + y is the anonymous function expression (x, y) => x + y.

2. Functions in lambda calculus only accept a single input. They’re unary. If you need more than one parameter, the function will take one input and return a new function that takes the next, and so on. The n-ary function (x, y) => x + y can be expressed as a unary function like: x => y => x + y. This transformation from an n-ary function to a unary function is known as currying.

3. Functions are first-class, meaning that functions can be used as inputs to other functions, and functions can return functions.

### Closures:

A closure is the bundling of a function with its lexical environment. Closures are created at function creation time. When a function is defined inside another function, it has access to the variable bindings in the outer function, even after the outer function exits. Closures are how partial applications get their fixed arguments. A fixed argument is an argument bound in the closure scope of a returned function. In add2(1)(2), 1 is a fixed argument in the function returned by add2(1).

Mutation is a change to data structure that happens in-place. For example:

    const foo = {  
      bar: 'baz'  
    };foo.bar = 'qux'; // mutation

