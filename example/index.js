"use strict";

const uniqueRandomRange = require("../lib");


let rand = uniqueRandomRange(7, 10);

console.log(rand());
// => 9

console.log(rand());
// => 7

console.log(rand());
// => 10

console.log(rand());
// => 8

console.log(rand());
// => 9


rand = uniqueRandomRange(7, 10);
console.log(rand());
// => 7

console.log(rand());
// => 9

rand.reset();

console.log(rand());
// => 9

console.log(rand());
// => 10

console.log(rand());
// => 7
