var mathlib = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(mathlib);
console.log(mathlib.add(5,6));
console.log(mathlib.multiply(2,3));
console.log(mathlib.square(3));
console.log(mathlib.random(10,25));