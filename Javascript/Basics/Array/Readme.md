**What are arrays?**

An array is an ordered sequence of items.

**How to create arrays**

A pair of square brackets [] is the literal way to denote an array. Inside the brackets, we put the individual elements of the array, separated by commas from other elements.
var nums = [1, 2, 3];

**Adding and removing elements**

1. Bracket notation
2. push()

Removing 3. pop() 4. shift()

**Array literals and the Array() constructor**

new Array([length])

var nums = Array(3);

console.log(nums); // [empty x 3]

var nums = Array(3);

console.log(nums[0]); //undefined
The reason why we get undefined returned when accessing these empty spaces is because the JavaScript interpreter is configured to always return undefined when accessing an undefined entity on a given value, such as when accessing a non-existent property on an object.

When working with arrays, it's always a good idea to keep things simple and use array literals only — no constructors.

**What are sparse arrays**

Sparse arrays do not have elements at contiguous positions — they have empty holes in them.

var nums = [1, 2, 3];
delete arr[1];

console.log(nums);
console.log(nums.length)
[1, empty, 3]
3

**The idea of mutability**

In JavaScript, arrays are mutable in nature. That is, we can change — or better to say, mutate — them once created.

**Array dimensions**

The dimension of an array is the number of times you have to specify an index to reach to a value

**Checking for arrays**

1. The instanceof operator
   syntax: value instanceof Array
   If value is an array, this expression would return true; otherwise it would return false.

[] instanceof Array
true
[1, 2, 3] instanceof Array
true
null instanceof Array
false
true instanceof Array
false
{0: 1, 1: 2} instanceof Array
false

In an iframe, if you want to check whether an outsider value is an array, the following code won't work as expected:

// this is code inside an iframe
// outsideArray is obtained from the outside window

console.log(outsideArray instanceof Array);
false

2. The Array.isArray() method
   syntax: Array.isArray(value)

Array.isArray([])
true
Array.isArray([1, 2, 3])
true
Array.isArray(null)
false
Array.isArray(true)
false
Array.isArray({0: 1, 1: 2})
false

Unlike instanceof, Array.isArray() can also solve the outer-window array check problem we saw above.

// this is code inside an iframe
// outsideArray is obtained from the outside window

console.log(Array.isArray(outsideArray));
true

**Joining arrays together using concat()**

_syntax: arr1.concat(arr2, arr3, ...., arrN)_

Note: The concat() method does not modify the original array (or any other array). It returns a new array composed by joining all the given arrays together.

**Filling an array using fill()**

_syntax:arr.fill(value[, start[, end]])_

By default, start and end default to 0 and arr.length, respectively. That is, every element would be replaced by value. Explicitly providing a value to these parameters would fill the array only upto the specified length.

[1, 2, 3, 4].fill(0)
[0, 0, 0, 0]
[1, true, 'Hello'].fill(100)
[100, 100, 100]

If the array is empty, there won't be any consequene of calling fill() on it, as can be seen below:

[].fill(0)
[]
[].fill(0, 0, 3)
[]
In the last statement here, you might expect the method to fill the first three indexes of the array with 0 but this does not happen. The reason is because the array is empty, i.e. it's length is equal to 0.

The fill() method doesn't process empty arrays.

One trick we could use with fill() is to initialize an array to a given length using Array(n) and then fill it with a given value.

var arr = Array(100).fill(0);

console.log(arr[0]);
console.log(arr[50]);
console.log(arr[99]);

**Using slice() to slice an array**

The **slice()** method takes a starting (inclusive) and ending index (exclusive) and returns a copy of the array in that range.

_arr.slice([start [, end]])_

**Adding/removing elements at the end — push() and pop()**

**Adding/removing elements at the start — unshift() and shift()**

The unshift() method adds an element to the start of an array.
_arr.unshift(item1, item2, ..., itemN)_

var nums = [1, 2];

nums.unshift(3);
console.log(nums);

nums.unshift(4);
console.log(nums);
console.log('Removing', nums.shift());
console.log('Removing', nums.shift());
console.log(nums);
[1 ,2 ,3 ]
[4, 3, 1, 2]
Removing 4
Removing 3
[1, 2]s

The **shift()** method removes an element from the start of an array.
It's syntactically the same as pop():

_arr.shift()_
The return value of shift() is the element removed.

**Adding/removing elements at an arbitrary index — splice()**

splice() is meant to add/remove elements from an array, in-place, starting from a given index.

_arr.splice([index[, deleteCount[, item1[, item2[, ...[, itemN]]]]]])_

The return value of splice() is an array holding the deleted items of the main array. If nothing is deleted, i.e. deleteCount is 0, an empty array is returned.

var arr = [1, 50, -6, -20, 22];
var deletedArr = arr.splice(1, 0, 'Hello', 'World!');

console.log(arr);
console.log(deletedArr);
[1, "Hello", "World!", 50, -6, -20, 22]
[]

**Reversing an array using reverse()**

The reverse() method reverses the order of elements of a given array, in place.
_arr.reverse()_
Note that as with sort(), reverse() mutates the original array and returns it back.

**Finding the index of an element using indexOf() and lastIndexOf()**

The indexOf() method finds a match for value in arr using a strict-equality comparison (the one employed by the === operator).

Calling indexOf() without an argument would make value equal to undefined.

**Existential and universal quantification using some() and every()**

The method some() takes a function and returns true if the function evaluates to true for at least one element in the calling array.

_arr.some(callbackFn)_
callbackFn is a function that is run for every element of arr until it evaluates down to true. Here's the syntax of the callback function:

_callbackFn(element, index, array, thisValue)_

function isSquare(element) {
return Number.isInteger(element \*\* 0.5);
}

var nums = [1, 2, 3];
console.log(`Square in ${nums}`, nums.some(isSquare));

nums = [2, 3, 4];
console.log(`Square in ${nums}`, nums.some(isSquare));

nums = [2, 3, 5, 7];
console.log(`Square in ${nums}`, nums.some(isSquare));

nums = [2, 3, 5, 7, 49, 100];
console.log(`Square in ${nums}`, nums.some(isSquare));
Square in [1, 2, 3]: true
Square in [2, 3, 4]: true
Square in [2, 3, 5, 7]: false
Square in [2, 3, 5, 7, 49, 100]: true

The method every() takes a function and returns true if the function evaluates to true for every single element in the calling array, or otherwise false.

_arr.every(callbackFn)_

function above50(marks) {
return marks >= 50;
}

var marksList = [35, 80, 54, 90, 60];
console.log(marksList.every(above50)); //false

marksList = [78, 86, 70, 95, 71];
console.log(marksList.every(above50));//true

_when the array is empty i.e. has not elements, every() returns true_

**Filtering items via filter()**

filter() takes in a callback function and returns an array containing all the elements in the calling array for which the callback function returns true.

function positiveNumber(num) {
return num > 0;
}

var nums = [10, 5, -4, -1, 50, 34, -27];
console.log(nums.filter(positiveNumber));//[10, 5, 50, 34]

nums = [0, 15, 0, -6, -1, -4, -0.5, 3.1, 10.5];
console.log(nums.filter(positiveNumber));//[15, 3.1, 10.5]

**Joining array elements using join()**

[1, 2, 3, 4].toString()
1,2,3,4
[1, 2, 3, 4] + ''
1,2,3,4
'The numbers are: ' + [1, 2, 3, 4]
The numbers are: 1,2,3,4

arr.join([ separator ])
By default, separator is set to ',', which means that arr.join() is effectively the same as calling arr.toString().

The return value of the join() method is a string containing all elements of arr separated by separator.

A common separator used out there is a single space — ' '.

In the code below, we create an array nums and then output it with each element being separated from the other one using a space:

var nums = [1, 2, 10, 50, 100];

console.log(nums.join(' '));
1 2 10 50 100

**Mapping to a new array via map()**

The map() method takes a function and returns a new array comprised of elements returned by the function for each element of the calling array.

_arr.map(mappingFn[, thisValue])_

**The sort() method**

The sort() method rearranges an array in an organized manner.
_arr.sort([comparisonFn])_

**Default sorting**

Calling sort() without an argument sorts the array in lexicographical order. There is a whole sequence of events performed each of which requires careful attention as soon as the method is invoked.
(https://tc39.es/ecma262/multipage/indexed-collections.html#sec-sortcompare)

[100, 25, 3, 70, 8, 10].sort()
[10, 100, 25, 3, 70, 8]

When comparing 10 and 3 together, both the values are converted into a string. This gives '10' and '3', respectively. Lexicographically, 1 comes before 3, hence 10 is put before 3.

**The comparison callback function**

function compareNums(a, b) {
if (a < b) return -1;
if (a > b) return 1;
return 0;
}

var nums = [100, 25, 3, 70, 8, 10];

console.log(nums.sort(compareNums)); // [3, 8, 10, 25, 70, 100]
Numeric sorting in decreasing order

**Dense array**
An array is said to be dense when it doesn't have any empty slots in it
