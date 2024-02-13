/**
 * Linear search
Linear search consists of iterating over the data structure one value at a time and 
checking if that value is the one we’re looking for. 
It’s probably the most intuitive kind of search and 
the best we can do if the data structure we’re using isn’t ordered.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (num) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }
  return -1;
};

console.log(search(6)); // 5
console.log(search(11)); // -1
