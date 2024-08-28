/**
 * 
 * In Bubble Sort algorithm, 

traverse from left and compare adjacent elements and the higher one is placed at right side. 
In this way, the largest element is moved to the rightmost end at first. 
This process is then continued to find the second largest and place it and so on until the data is sorted.
 */

function bubbleSort(arr) {
  let swapped, temp;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log(bubbleSort([-6, 20, 8, -2, 4]));
/**
 * 
 * Time Complexity: O(N2)
Auxiliary Space: O(1)
 */
