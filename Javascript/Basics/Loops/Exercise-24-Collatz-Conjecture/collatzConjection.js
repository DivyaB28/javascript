function collatzLength(n) {
  if (
    typeof n !== "number" ||
    isNaN(n) ||
    !isFinite(n) ||
    parseInt(n) !== n ||
    n < 1
  ) {
    return null;
  }
  let length = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    length++;
  }
  return length;
}
console.log(collatzLength(3)); //8
console.log(collatzLength(17)); //13
console.log(collatzLength(30)); //19
console.log(collatzLength("hello")); //null
console.log(collatzLength(Infinity)); //null
console.log(collatzLength(2.67)); //null
console.log(collatzLength(NaN)); //null
