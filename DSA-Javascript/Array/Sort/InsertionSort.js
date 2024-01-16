function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && numToInsert < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numToInsert;
  }
  return arr;
}
const arr = [-6, 20, 8, -2, 4];
console.log(insertionSort(arr));
