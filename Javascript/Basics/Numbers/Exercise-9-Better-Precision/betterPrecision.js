/**
 * Objective
Create a function that extends the number method toPrecision() to return a stringified number without exponential notation when the exponent is less than 5.


 * @param {*} num 
 * @param {*} precision 
 * @returns 
 * 
 * betterPrecision(124, 1)
'100'
betterPrecision(124, 2)
'120'
betterPrecision(178, 2)
'180'
betterPrecision(17000, 1)
'20000'
betterPrecision(17000, 2)
'17000'
betterPrecision(17000, 3)
'17000'
betterPrecision(389520, 4)
'3.895e+5'
 */
function betterPrecision(num, precision) {
  let stringifiedNum = num.toPrecision(precision);

  let index = stringifiedNum.indexOf("e");
  if (index !== -1) {
    let exp = Number(stringifiedNum.slice(index + 1));
    if (exp < 5) {
      return Number(stringifiedNum).toString();
    }
  }
  return stringifiedNum;
}
console.log(betterPrecision(124, 1)); // 100
console.log(betterPrecision(124, 2)); // 120
console.log(betterPrecision(178, 1)); // 200
