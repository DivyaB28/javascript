/**
 * Write a function that takes two parameters: A non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the array sum up to the target sum, the function should return them in an array.
 *  If no two numbers sum up to the target sum, the function should return an empty array.
 */

/**
 * Approch 1
 *
 * Time complexity : O(n²)
 * @param {*} array
 * @param {*} targetSum
 * @returns
 */

function twoNumberSum(array, targetSum) {
  let result = [];
  // We use a nested loop to test every possible combination of numbers within the array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If we find the right combination, we push both values into the result array and return it
      if (array[i] + array[j] === targetSum) {
        result.push(array[i]);
        result.push(array[j]);
        return result;
      }
    }
  }
  // Return the result array
  return result;
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)); // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)); // []

/**
 * Approach 2;
 *  Time complexity : O(nlogn)
 *
 * This is better than the solution before, since we're only iterating once.
 * But we're still sorting the array (which usually has a logarithmic complexity) and then iterating once (which is linear complexity).
 * The algorithmic complexity of this solution is O(n log(n)).
 * @param {[]} array
 * @param {*} targetSum
 * @returns
 */
function twoNumberSum(array, targetSum) {
  // Sort the array and iterate it with one pointer at each extreme
  // At each iteration, check if the sum of the two pointers is bigger or smaller than the target
  // If it's bigger, move the right pointer to the left
  // If it's smaller, move the left pointer to the right
  let sortedArray = array.sort((a, b) => a - b);
  let leftLimit = 0;
  let rightLimit = sortedArray.length - 1;

  while (leftLimit < rightLimit) {
    const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit];

    if (currentSum === targetSum)
      return [sortedArray[leftLimit], sortedArray[rightLimit]];
    else currentSum < targetSum ? leftLimit++ : rightLimit--;
  }

  return [];
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)); // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)); // []

/**
 * Approach 3:
 * Time complexity: O(n)
 * @param {*} array
 * @param {*} targetSum
 * @returns
 */
function twoNumberSum(array, targetSum) {
  // Iterate over array once, and at each iteration
  // check if the number you need to get to ther target exists in the array
  // If it exists, return its index and the present number index
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let desiredNumber = targetSum - array[i];
    if (
      array.indexOf(desiredNumber) !== -1 &&
      array.indexOf(desiredNumber) !== i
    ) {
      result.push(array[i]);
      result.push(array[array.indexOf(desiredNumber)]);
      break;
    }
  }

  return result;
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)); // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)); // []
