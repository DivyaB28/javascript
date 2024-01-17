/**
 * Changing casing using toLowerCase() and toUpperCase()
 * Trimming whitespace using trim()
 * Searching using indexOf() and lastIndexOf()
 * Splitting a string using split()
 * Slicing a string using slice() and substring()
 * Replacing substrings using replace()
 */
/**
 * string.toLowerCase()
 * string.toUpperCase()
 * 
 * 'Hello World!'.toLowerCase()
'hello world'
'Hello World!'.toUpperCase()
'HELLO WORLD!'
 */

/**
 * The trim() method removes whitespace characters from both ends of a given string.
 * 
 * '   Hello World!   '.trim()
'Hello World!'
'\n   Hello World!\n\n'.trim()
'Hello World!'

Moving on, in order to remove whitespace characters from only one end of the string, we could use the more specific methods — trimStart() and trimEnd().
 */

/**
 * Searching for substrings- indexOf() & lastIndexOf()
 *
 * The indexOf() method returns the index of the first occurrence of a given substring within a main string. If the substring isn't found, -1 is returned.
 * The second argument is useful when we want to search beyond the first occurrence of a substring.

In the code below we demonstrate this idea:

var s = 'Hello';

var i = s.indexOf('l');
console.log(i);

i = s.indexOf('l', i + 1);
console.log(i);

console.log(s.indexOf('l', i + 1));
 */

/**
 * Create a function getAllIndexes() that takes in two strings str and substr, and outputs back an array containing the index of each occurrence of substr in str, or otherwise the value -1.
 */

function getAllIndexes(str, substr) {
  let index = str.indexOf(substr);
  if (index === -1) return -1;
  let countArr = [];
  while (index !== -1) {
    countArr.push(index);
    index = str.indexOf(substr, index + 1);
  }
  return countArr;
}
console.log(getAllIndexes("Hello World!", "l"));
console.log(getAllIndexes("Hello World!", "o"));

/**
 * The split() method splits a string apart at every occurrence of a given separator, and returns back an array containing the left over substrings.
 * 
 * 'Hello'.split()
["Hello"]
'H e l l o'.split(' ')
["H", "e", "l", "l", "o"]
'H,e,l,l, o'.split(',')
["H", "e", "l", "l", " o"]
 * 
If separator is an empty string (''), we get an array of characters returned. This is a common operation in programs that ought to make modifications to certain characters of the string.
>>'Hello'.split('')
["H", "e", "l", "l", "o"]

with limit

'Hello'.split('')
['H', 'e', 'l', 'l', 'o']
'Hello'.split('', 10)
['H', 'e', 'l', 'l', 'o']
'Hello'.split('', 2)
['H', 'e']
'Hello'.split('', 0)
[]
 */

/**
 * Slicing string - slice() and substring()
 * 
 * The slice() method slices a string from a starting position to an ending position, and returns back the slice.
 * string.slice([start[, end]])
 * 
 * 'Hello'.slice()
'Hello'
'Hello'.slice(1)
'ello'
'Hello'.slice(1,2)
'e'

In this case, the index is computed from the end of the string. That is, -1 points to the last character, -2 points to the second last character and so on and so forth.

Consider the following code:

var s = 'Coder';

console.log(s.slice(-2));
console.log(s.slice(-2, -1));
console.log(s.slice(0, -1));
'er"
"r"
"Code'

The substring() method slices a string from a starting position to an ending position and returns back the slice.

he main difference is the way given arguments are perceived in the method's internal implementation.

If the start argument to substring() is greater than end, the arguments are swapped. This doesn't happen with slice().

An illustration follows:

'Hello'.slice(2, 0)
''
'Hello'.substring(2, 0)
'He'

Moreover, if a given argument to substring() is negative, it is taken to be 0 unlike slice() which starts counting from the end of the string.

An illustration follows:

'Hello'.slice(-2, -1)
'l'
'Hello'.substring(-2, -1)
''
In the second statement here, both the negative arguments to substring() get converted to 0, likewise the call substring(-2, -1) translates to substring(0, 0), which simply returns an empty string.
 */

/**
 * String replacement: replace() and replaceAll()
 * The replace() string method replaces a substring inside a string with a given value.
 * 
 * 'Hello World!'.replace('World', 'Programmer')
'Hello Programmer!'
'Good'.replace('G', 'F')
'Food'
'Good'.replace('GOOD', 'FOOD')
'Good'
'3 x 3 = 9'.replace('3', '4')
'4 x 3 = 9'

As can be seen in the last statement here, replace() only replaces the first occurrence of a substring inside the main string — in this case, only the first occurrence of '3'.

The replaceAll() method replaces all occurrences of a substring in a string with another value.
'Food'.replaceAll('o', 'e')
'Feed'
'3 x 3 = 9'.replaceAll('3', '4')
'4 x 4 = 9'
'Hello'.replaceAll('a', 'e')
'Hello'

 */

/**
 * replace() and regular expressions
 *
 */
let s = "Food";
console.log(s.replace(/o/g, "e")); //Feed
