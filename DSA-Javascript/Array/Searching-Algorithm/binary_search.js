/*

    Conditions to apply Binary Search algorithm:

   - The data structure must be sorted.
   - Access to any element of the data structure takes constant time.

In this algorithm, 

Divide the search space into two halves by finding the middle index “mid”. 

Finding the middle index “mid” in Binary Search Algorithm : mid = low + (hight + low) / 2 

Compare the middle element of the search space with the key. 
If the key is found at middle element, the process is terminated.
If the key is not found at middle element, choose which half will be used as the next search space.
If the key is smaller than the middle element, then the left side is used for next search.
If the key is larger than the middle element, then the right side is used for next search.
This process is continued until the key is found or the total search space is exhausted.


How to Implement Binary Search?
The Binary Search Algorithm can be implemented in the following two ways

-Iterative Binary Search Algorithm
-Recursive Binary Search Algorithm
*/

// Program to implement iterative Binary Search

// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function iterativeBinarySearch(arr, key) {
  let l = 0;
  let h = arr.length - 1;
  let mid;

  while (h >= l) {
    mid = l + Math.floor((h - l) / 2);

    if (arr[mid] === key) {
      return mid;
    }

    if (arr[mid] > key) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

let arr = new Array(2, 3, 4, 10, 40);
let x = 10;
let n = arr.length;
let result = iterativeBinarySearch(arr, x);

result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);

/*
    Time Complexity: O(log N)
    Auxiliary Space: O(1)
*/

/**
 * Create a recursive function and compare the mid of the search space with the key.
 * And based on the result either return the index where the key is found or call the recursive function for the next search space.
 */

// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function recursiveBinarySearch(arr, l, h, key) {
  if (h >= l) {
    let mid = l + Math.floor((h - l) / 2);
    // If the element is present at the middle
    // itself
    if (arr[mid] === key) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > key) {
      return recursiveBinarySearch(arr, l, mid - 1, key);
    } else {
      // Else the element can only be present
      // in right subarray
      return recursiveBinarySearch(arr, mid + 1, h, key);
    }
  }
  // We reach here when element is not
  // present in array
  return -1;
}

let arr1 = [2, 3, 4, 10, 40];
let x1 = 10;
let n1 = arr1.length;
let result1 = recursiveBinarySearch(arr1, 0, n1 - 1, x1);
result1 == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result1);

/**
 * Time Complexity: 
Best Case: O(1)
Average Case: O(log N)
Worst Case: O(log N)
Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).
 */

/**
 * Advantages of Binary Search:
Binary search is faster than linear search, especially for large arrays.
More efficient than other searching algorithms with a similar time complexity, such as interpolation search or exponential search.
Binary search is well-suited for searching large datasets that are stored in external memory, such as on a hard drive or in the cloud.
*Drawbacks of Binary Search:
The array should be sorted.
Binary search requires that the data structure being searched be stored in contiguous memory locations. 
Binary search requires that the elements of the array be comparable, meaning that they must be able to be ordered.
*Applications of Binary Search:
Binary search can be used as a building block for more complex algorithms used in machine learning, such as algorithms for training neural networks or finding the optimal hyperparameters for a model.
It can be used for searching in computer graphics such as algorithms for ray tracing or texture mapping.
It can be used for searching a database.
 */
