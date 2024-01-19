function compareNums(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
var nums = [100, 25, 3, 70, 8, 10];

nums.sort(compareNums);
nums.reverse();
console.log(nums); //[ 100, 70, 25, 10, 8, 3 ]
