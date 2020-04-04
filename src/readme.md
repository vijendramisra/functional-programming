### There are three important points that make lambda calculus special:

1. Functions are always anonymous. In JavaScript, the right side of const sum = (x, y) => x + y is the anonymous function expression (x, y) => x + y.

2. Functions in lambda calculus only accept a single input. They’re unary. If you need more than one parameter, the function will take one input and return a new function that takes the next, and so on. The n-ary function (x, y) => x + y can be expressed as a unary function like: x => y => x + y. This transformation from an n-ary function to a unary function is known as currying.

3. Functions are first-class, meaning that functions can be used as inputs to other functions, and functions can return functions.

### Closures:

A closure is the bundling of a function with its lexical environment. Closures are created at function creation time. When a function is defined inside another function, it has access to the variable bindings in the outer function, even after the outer function exits. Closures are how partial applications get their fixed arguments. A fixed argument is an argument bound in the closure scope of a returned function. In add2(1)(2), 1 is a fixed argument in the function returned by add2(1).

> JavaScript is a multi-paradigm language, meaning that it supports
> programming in many different styles. Other styles supported by
> JavaScript include procedural (imperative) programming (like C), where
> functions represent a subroutine of instructions that can be called
> repeatedly for reuse and organization, object-oriented programming,
> where objects — not functions — are the primary building blocks, and
> of course, functional programming. The disadvantage of a
> multi-paradigm language is that imperative and object-oriented
> programming tend to imply that almost everything needs to be mutable.
> 
> Mutation is a change to data structure that happens in-place. For
> example:
> 
>     const foo = {  
>       bar: 'baz'  
>     };foo.bar = 'qux'; // mutation

#### Here are some features that some functional languages have, that JavaScript does not have:

1.  **Purity:**  In some FP languages, purity is enforced by the language. Expressions with side-effects are not allowed.
2.  **Immutability:**  Some FP languages disable mutations. Instead of mutating an existing data structure, such as an array or object, expressions evaluate to new data structures. This may sound inefficient, but most functional languages use trie data structures under the hood, which feature structural sharing: meaning that the old object and new object share references to the data that is the same.
3.  **Recursion:**  Recursion is the ability for a function to reference itself for the purpose of iteration. In many FP languages, recursion is the only way to iterate. There are no loop statements like  `for`,  `while`, or  `do`  loops.

### Mapping

Pure functions are all about mapping. Functions map input arguments to return values, meaning that for each set of inputs, there exists an output. A function will take the inputs and return the corresponding output.

    _`Math.max()`_  takes numbers as arguments and returns the largest number:
    
    Math.max(2, 8, 5); // 8

> So,  _`console.log( double(5) );`_  is the same as 
> _`console.log(10);`_
> 
> This is true because  _`double()`_  is a pure function, but if 
> _`double()`_ had side-effects, such as saving the value to disk or logging to the console, you couldn’t simply replace  _`double(5)`_
> with 10 without changing the meaning.

## Pure Functions

A  **pure function**  is a function which:

-   Given the same input, will always return the same output.
-   Produces no side effects.

