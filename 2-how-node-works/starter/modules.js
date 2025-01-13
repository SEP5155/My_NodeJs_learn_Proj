// console.log(arguments);
// module exports
const Calc = require('./test-module-1');
const calc1 = new Calc();

console.log(calc1.add(5, 10));
console.log(calc1.devide(15, 10));

// exports

// const calc2 = require('./test-module-2');
// console.log(calc2.multiply(9, 2));
// console.log(calc2.devide(9, 2));

// assign funcs into variables
const {add, devide, multiply } = require('./test-module-2');

console.log(add(2, 2));
console.log(multiply(2, 2));

require('./test-module-3') ();
require('./test-module-3') ();
require('./test-module-3') ();