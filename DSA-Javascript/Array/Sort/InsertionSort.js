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

function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentUnsortedItem = array[i];

    // If the current unsorted item is smaller than the item to its left,
    for (var j = i; j > 0 && array[j - 1] > currentUnsortedItem; j--) {
      // Shift item left in the sorted subset of the array.
      array[j] = array[j - 1];
    }
    // Shift item to the right in the sorted subset of the array.
    array[j] = currentUnsortedItem;
  }
  return array;
}
const array = [-6, 20, 8, -2, 4];
console.log(InsertionSort(array));
