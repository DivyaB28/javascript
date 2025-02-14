console.log(square(5)); // 25

function square(n) {
  return n * n;
}

/**
 * 
 * // All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
 * 
 */

/**
 * Function hoisting only works with function declarations — not with function expressions. The following code will not work:
 */
// console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// const square = function (n) {
//   return n * n;
// };

printHello();
// hello

function printHello() {
  printDillion();
  // dillion

  console.log("hello");

  function printDillion() {
    console.log("dillion");
  }
}
// output : dillion hello
