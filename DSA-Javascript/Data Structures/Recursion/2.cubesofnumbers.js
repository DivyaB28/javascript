function cubeSum(n) {
  if (n === 0) {
    return 0;
  } else {
    return n ** 3 + cubeSum(n - 1);
  }
}

console.log(cubeSum(4));
/**
 * https://www.geeksforgeeks.org/cube-sum-of-first-n-natural-numbers-in-javascript/
 */
