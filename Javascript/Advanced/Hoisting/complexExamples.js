/**
 * 1. Hoisting in block scope
 */

{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
  console.log(x); // This line won't execute
}

/**
 * 2. Variable hoisting across scope
 */

var a = 1;

function test() {
  console.log(a); // undefined (due to hoisting within function scope)
  var a = 2;
  console.log(a); // 2
}

test();
console.log(a); // 1 (global `a` is unaffected)

/**
 * 3. Convert a var-based function into a let-based function to prevent hoisting issues.
 */

console.log(myFunction()); // TypeError: myFunction is not a function

var myFunction = function () {
  return "Hello, world";
};

console.log(myFunction()); // "Hello, world"

// After using let

console.log(sayHello()); // ReferenceError: Cannot access 'sayHello' before initialization

let sayHello = function () {
  return "Hello, World!";
};

console.log(sayHello()); // "Hello, World!"
