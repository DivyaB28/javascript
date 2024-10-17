/**
 * The steps it takes are the following:

Figure how many digits the largest number has.

Loop through the list up to the largest number of digits. In every iteration:

Create “buckets” for each digit (from 0 to 9) and place each value in its corresponding bucket according to the digit being evaluated.

Replace the existing list with the values sorted in the buckets, starting from 0 and going up to 9.
 */
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigitCount = (nums) => {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    return maxDigits;
  }
};
const ReadixSort = (nums) => {
  let maxDigitCount = mostDigitCount(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);

      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(ReadixSort([12, -1, 0, 1234, 6, 9]));

/**
 * Referenfce: https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-radix-sort
 */
