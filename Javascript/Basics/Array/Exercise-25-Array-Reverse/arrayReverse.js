function arrayReverse(arr) {
  let temp;
  let n = arr.length;
  let mid = n / 2;

  for (let i = 0; i < mid; i++) {
    temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}
console.log(arrayReverse([4, 9, 1]));
