/**
 * write a function to Swap two variables without using a third variable
 */

let value1 = 10,
  value2 = 20;

// Using ES6 Destructuring (Best & Cleanest Approach)
function swapUsingDestructuring(arg1, arg2) {
  console.log(`Before swap: value1 = ${arg1}, value2 = ${arg2}`);
  [arg1, arg2] = [arg2, arg1];
  console.log(`After swap: value1 = ${arg1}, value2 = ${arg2}`);
}

swapUsingDestructuring(value1, value2);

// Using Arithmetic Operators (+ and -)

function swapArithmetic(a, b) {
  console.log(`Before swap: a = ${a}, b = ${b}`);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`after swap: a = ${a}, b = ${b}`);
}
swapArithmetic(value1, value2);
// Swapping two numbers using xor bitwise operator:

// 0101 ^ 1010 = 1111
// The XOR (^) bitwise operator swaps two numbers without using a third variable. It works because of the XOR properties:

// x ^ x = 0 (Any number XOR itself is 0)
// x ^ 0 = x (Any number XOR 0 remains unchanged)
// x ^ y ^ y = x (Applying XOR twice with the same value cancels out)

function swapNumbers(a, b) {
  console.log(`Before swap: a = ${a}, b = ${b}`);

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(`after swap: a = ${a}, b = ${b}`);
}

swapNumbers(value1, value2);
