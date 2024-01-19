function binarySearch(num, nums) {
  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === num) return true;
    if (num < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return false;
}
console.log(binarySearch(10, [1, 5, 10]));
// true
console.log(binarySearch(500, [1, 2, 9, 20, 60, 100, 101, 200, 500]));
// true;
console.log(binarySearch(10, [1, 2, 9, 20, 60, 100, 101, 200, 500]));
// false;
console.log(binarySearch(10, [10]));
// true;
console.log(binarySearch(10, []));
// false;
