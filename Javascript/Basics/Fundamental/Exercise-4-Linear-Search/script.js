/**
 * 
 * Description
Suppose we have a given array and want to check whether it has a given item in it or not.

This can easily be done by sequentially iterating over the array and comparing each subsequent element with the item to find.

An algorithm that operates in this manner in order to search for a value in a array is generally known as a sequential search, or linear search, algorithm.
*/

function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}

/**
 * 
 * linearSearch([1, 2, 3], 2)
true
linearSearch([1, 2, 3], '2')
false
linearSearch(['2', '4', '6'], '2')
true
linearSearch(['2, 6', '1, 4'], '2')
false
linearSearch([false, false, false, true], false)
true
 */
