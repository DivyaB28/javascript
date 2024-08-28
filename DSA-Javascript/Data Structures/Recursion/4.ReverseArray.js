function reverseArray(arr, start, end) {
  if (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
}

let arr = [5, 4, 3, 2, 1];
let n = 5;
reverseArray(arr, 0, n - 1);
console.log(arr);
