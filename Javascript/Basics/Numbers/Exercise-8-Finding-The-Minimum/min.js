/**
 * Objective
Given an array of numbers, find the minimum.

Description
In a list of numbers, the smallest number is often referred to as the minimum.

In this exercise, you have to create a function min() to find and return the minimum element of a given array of numbers.
 * @param {*} arr 
arr is the array whose minimum we ought to find.

If the given array is empty, return the special number Infinity; otherwise return the minimum value.
 * @returns 
 */

function min(arr) {
  let minimum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) minimum = arr[i];
  }
  return minimum;
}
console.log(min([-5, 1, 0, 5, 6])); //-5
console.log(min([0, 0, 0])); //0
console.log(min([1, 9, 10, 100])); //1
console.log(min([])); //Infinity
