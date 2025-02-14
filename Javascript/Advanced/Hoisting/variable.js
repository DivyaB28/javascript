/**
 * Reference: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 * Variable hoisting
 */

console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();

/**
 * Whether let and const are hoisted is a matter of definition debate.
 * Referencing the variable in the block before the variable declaration always results in a ReferenceError,
 * because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
 */

console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
