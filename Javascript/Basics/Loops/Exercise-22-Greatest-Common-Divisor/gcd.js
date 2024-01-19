function gcd(a, b) {
  //If both the integers are 0, we return Infinity.

  if (a === 0 && b === 0) return Infinity;
  // If only one integer is 0, we return the other integer.

  if (a === 0 || b === 0) return a + b;
  //   limit holds the upper limit of the loop counter variable i, which is simply the minimum of the two values a and b. We choose the minimum because if we go higher than that,
  //   the smaller of a and b won't be divisible by that larger value.
  let limit = Math.min(a, b);
  let commonDivisor = 1;
  for (let i = 1; i <= limit; i++) {
    if (a % i === 0 && b % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
}
