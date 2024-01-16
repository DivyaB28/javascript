/**
 * 
 * Objective
Create a factorial() function to compute the factorial of a given integer.

Description
The factorial of an integer n is the product of all integers starting from that integer all the way down to 1

In terms of a function, it could be expressed as follows:

f(n)=n×(n−1)×(n−2)×⋯×2×1

In this exercise, you have to create a function factorial() that takes in an integer and returns its factorial.

The function MUST compute the factorial iteratively i.e. using a for (or maybe while) loop. In addition to this, if the given argument to factorial() is not a number, the function should return null.
 */
function factorial(n) {
  if (typeof n !== "number") {
    return null;
  }

  var result = 1;
  for (var i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
