/**
 * Binary search
When we have an ordered data structure, there’s a much more efficient approach we can take, binary search.
 What we do in binary search is the following:

Select the middle value of our data structure and “ask”, is this the value we’re looking for?
If not, we “ask” whether the value we’re looking for is greater or less than the middle value?
If it’s greater, we “discard” all the values smaller than the mid value. If it’s smaller, we “discard” all the values greater than the mid value.
And then we repeat the same operation until we find the given value or the remaining "piece" of the data structure can't be divided anymore.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (num) => {
  // We'll use three pointers.
  // One at the start of the array, one at the end and another at the middle.
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  // While we haven't found the number and the start pointer is equal or smaller to the end pointer
  while (arr[middle] !== num && start <= end) {
    // If the desired number is smaller than the middle, discard the bigger half of the array
    if (num < arr[middle]) end = middle - 1;
    // If the desired number is bigger than the middle, discard the smaller half of the array
    else start = middle + 1;
    // Recalculate the middle value
    middle = Math.floor((start + end) / 2);
  }
  // If we've exited the loop it means we've either found the value or the array can't be devided further
  return arr[middle] === num ? middle : -1;
};

console.log(search(6)); // 5
console.log(search(11)); // -1

// The complexity of this algorithm is logarithmic – O(log n).
