function hourglassSum(arr) {
  // Write your code here

  let sum = 0;
  let maxSum = 0;

  for (let row = 0; row < arr.length - 2; row++) {
    for (let col = 0; col < arr[row].length - 2; col++) {
      sum =
        arr[row][col] +
        arr[row][col + 1] +
        arr[row][col + 2] +
        arr[row + 1][col + 1] +
        arr[row + 2][col] +
        arr[row + 2][col + 1] +
        arr[row + 2][col + 2];

      maxSum = sum > maxSum ? sum : maxSum;
    }
  }
  return maxSum;
}

function hourglassSum(arr) {
  let biggestSumPositive = 0;
  let biggestSumNagative = 0;
  let anySumIsZero = false;
  let sumArray = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let r = 0; r < arr[i].length - 2; r++) {
      let sum =
        arr[i][r] +
        arr[i][r + 1] +
        arr[i][r + 2] +
        arr[i + 1][r + 1] +
        arr[i + 2][r] +
        arr[i + 2][r + 1] +
        arr[i + 2][r + 2];
      if (sum === 0) {
        anySumIsZero = true;
      }
      if (sum < 0 && sum > biggestSumNagative) {
        biggestSumNagative = sum;
      } else if (!biggestSumNagative && sum < 0) {
        biggestSumNagative = sum;
      }
      if (sum > 0 && sum > biggestSumPositive) {
        biggestSumPositive = sum;
      }
      // * for debug only
      if (sumArray[i]) {
        sumArray[i][r] = sum;
      } else {
        sumArray[i] = [sum];
      }
    }
  }
  console.log(biggestSumNagative, biggestSumPositive, sumArray);
  return biggestSumPositive
    ? biggestSumPositive
    : anySumIsZero
    ? 0
    : biggestSumNagative;
}
