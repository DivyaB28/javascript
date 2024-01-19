function selectionSort(arr) {
  let minIndex;
  let temp;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([-2, 10, 5, -3, 5, 8, 9]));
