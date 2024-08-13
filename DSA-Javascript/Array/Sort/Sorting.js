let ArrayBeforeSort = [13, 46, 24, 52, 20, 9];

function selectionSort(arr, len) {
  for (let i = 0; i <= len - 2; i++) {
    let min = i;

    for (let j = i + 1; j <= len - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

/*
* Selection sort :
* The algorithm steps are as follows:

* First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range.
* The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on.
(Initially, the range will be the whole array starting from the first index.)
* Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.
* After that, we will swap the minimum element with the first element of the selected range(in step 1). 
*Finally, after each iteration, we will find that the array is sorted up to the first index of the range. 

Time complexity : O(n2)
*/

function bubbleSort(arr, len) {
  let swapped;
  do {
    swapped = false;
    for (let i = len - 1; i >= 0; i--) {
      for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
    }
  } while (swapped);
  return arr;
}

let ArrayAfterSort = selectionSort(ArrayBeforeSort, 6);
console.log(ArrayAfterSort);
console.log(bubbleSort([13, 46, 24, 52, 20, 9], 6));

/**
 * Bubble Sort:
 *
 * The algorithm steps are as follows:
 * First, we will select the range of the unsorted array. For that, we will run a loop(say i) that will signify the last index of the selected range. The loop will run backward from index n-1 to 0(where n = size of the array). The value i = n-1 means the range is from 0 to n-1, and similarly, i = n-2 means the range is from 0 to n-2, and so on.
 * Within the loop, we will run another loop(say j, runs from 0 to i-1 though the range is from 0 to i) to push the maximum element to the last index of the selected range, by repeatedly swapping adjacent elements.
 * Basically, we will swap adjacent elements(if arr[j] > arr[j+1]) until the maximum element of the range reaches the end.
 * Thus, after each iteration, the last part of the array will become sorted. Like: after the first iteration, the array up to the last index will be sorted, and after the second iteration, the array up to the second last index will be sorted, and so on.
 * After (n-1) iteration, the whole array will be sorted.
 *
 * Worst and Average Time Complexity : O(n2)
 * Best Time Complexity: O(n)
 */

function insertionSort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([6, 5, 4, 3, 2, 1], 6));

/**
 * Insertion Sort:
 *
 * Select an element in each iteration from the unsorted array(using a loop).
 * Place it in its corresponding position in the sorted part and shift the remaining elements accordingly (using an inner loop and swapping).
 * The “inner while loop” basically shifts the elements using swapping.
 *
 * Worst & Average Time complexity : O(n2)
 * Best TIme complexity : O(n)
 */
