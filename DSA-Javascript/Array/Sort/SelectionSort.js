/**
 * Reference : https://medium.com/basecs/exponentially-easy-selection-sort-d7a34292b049
 *
 * @param {*} nums
 * @returns
 */

function SelectionSort(nums) {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    let smalledNumberIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (nums[j] < nums[i]) {
        smalledNumberIndex = j;
      }
    }

    if (smalledNumberIndex !== i) {
      let currentNumber = nums[i];
      nums[i] = nums[smalledNumberIndex];
      nums[smalledNumberIndex] = currentNumber;
    }
  }
  return nums;
}
// O(n^2)
console.log(SelectionSort([2, 1, 4, 3, 5]));

/**
 * 
 * Here is the algorithmic version of what we just did, assuming ascending order sort:

- Set the smallest number to be the first element in the list.
- Look through the entire list and find the actual smallest number.
- Swap that value with the item at the index of the smallest number.
- Move on to look at the next unsorted item in the list, repeat steps 2 + 3.
- Continue to do this until we arrive at the last element in the list.
 */
