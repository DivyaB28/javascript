function mergeSort(array) {
  let arraySize = array.length;

  if (arraySize === 1) {
    return;
  }

  let midPoint = Math.floor(arraySize / 2);
  let leftArray = array.slice(0, midPoint);
  let rightArray = array.slice(midPoint);

  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(leftArray, rightArray, array);
  return array;
}

function merge(leftArray = [], rightArray = [], array) {
  let i = 0;
  while (leftArray.length && rightArray.length) {
    if (rightArray[0] < leftArray[0]) {
      array[i++] = rightArray.shift();
    } else {
      array[i++] = leftArray.shift();
    }
  }

  while (leftArray.length) {
    array[i++] = leftArray.shift();
  }
  while (rightArray.length) {
    array[i++] = rightArray.shift();
  }
}

console.log(mergeSort([1, 1, 1, 1, 1, 1]));
