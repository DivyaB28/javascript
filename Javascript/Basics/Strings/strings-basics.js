/**
 * Quick recap of strings
 * Escaping characters using \
 * Template literals
 * String concatenation
 * The concept of immutability
 * The String() constructor
 * Internals of strings — UTF-16 encoding
 */

/**
 * What is Unicode and UTF-16
 * The charCodeAt() and codePointAt() string methods
 * The String.fromCharCode() and String.fromCodePoint() static methods
 * How the length property works
 * Unicode escape sequences
 * Lexicographic comparison
 * The string @@iterator() method
 */

/**
 * In ASCII, the lowercase 'a' from the English alphabet is associated with the number 97. The uppercase 'A' is associated with the number 65. Similarly,
 * lowercase 'b' is 98, while uppercase 'B' is 66. The space character is 32.
 *
 * In ASCII, the lowercase 'a' from the English alphabet is associated with the number 97.
 * The uppercase 'A' is associated with the number 65. Similarly, lowercase 'b' is 98, while uppercase 'B' is 66.
 * The space character is 32.
 *
 * Unicode is a universal character set that contains characters and symbols from a humongous variety of languages.
 * It covers 149,186 graphically-representable characters as of version 15.0 (year 2022) in addition to other control characters.
 *
 * To convert back and forth from characters to numbers (formally known as character encoding) and numbers to characters (formally known as character decoding),
 * we ought to use some kind of encoding-decoding mechanism, also known as a character encoding scheme.
 * One such scheme is Unicode Transformation Format - 32, commonly known as UTF-32.
 *  It uses 32 bits to represent every single character in the Unicode character set.
 *
 * Coming all the way back to JavaScript, it uses the UTF-16 encoding scheme by default for its string type. Hence, Unicode is the character set used.
 * And in that way, each character in a given string in JavaScript occupies either 16 bits or 32 bits, depending on the character.
 *
 * A string is a sequence of unsigned 16-bit integers.
 *
 * The charCodeAt() method - string.charCodeAt([index])
 * If we pass in an index to charCodeAt() that doesn't exist in the given string, the method returns NaN.
 *
 * 
 * If we know that the given string has a character with a code point beyond the 16-bit range (i.e. 65,535), represented using 2 code units, then we must use the codePointAt() method.
 * The codePointAt() method - string.codePointAt([index])
 * if the inspected code unit represents a high surrogate value, codePointAt() combines the following low surrogate code unit along with the high surrogate one (the one inspected) to produce the complete code point.

 * let str = '😁'; 
 * str[0];
'\uD83D'
 * 
 * str[1]
'\uDE01'
str.codePointAt(0)
128513
str.codePointAt(1)
56833

Notice the first log here. Since the character '🙂' comprises of two code units, and in str.codePointAt(0),
 we inspect the first code unit which is a high surrogate, the method combines the next code unit (whose value is 56,898) along with the high surrogate to produce 128,578.
However, also notice the second log. If the inspected code unit doesn't represent a high surrogate, codePointAt() returns the unit as it is. 
Likewise, for the code above, str.codePointAt(1) and str.charCodeAt(1) return the same thing.


str.codePointAt(3);
undefined
str.charCodeAt(3)
NaN
 */

/**
 * The length property - The length string property returns back the total number of code units in the given string.
 *
 * Note : length does NOT return the total number of characters in a string; instead it returns the total number of code units in the string,
 * as a string is simply a sequence of code units.
 */

/**
 * Unicode escape sequences - '\u{XXXX}'
 * A hexadecimal number follows \u, spanning exactly 4 digits (each denoted as X). The maximum can obviously be \uFFFF, which is the largest a single code unit can get.
 * Unicode escape sequences are useful when we have the hexadecimal code of a particular character and want to showcase it.
 *
 * Note:This is obviously not the only way to go from the character's code to its visual representation — we can also use String.fromCharCode() and String.codePointAt(),
 * given that the code is already in decimal representation, or converted to decimal representation from hexadecimal.
 * 
 * As a quick reference: '\n' has the hex code A, which can be expressed as the same number in many ways such as 0A, 00A, 000A and
 *  so on; ' ' (space) has the hex code 20; 'a' has the hex code 61; and 😀 has the hex code 1f642.

Consider the snippet below:

'\u{A}'
'\n'
'\u{00A}'
'\n'
'\u{00000A}'
'\n'
'\u{20}'
' '
'\u{61}'
'a'
'\u{1F642}'
'🙂'
Note that whatever code point we have, we can add as many leading zeroes as we want to uptil the point the number doesn't get larger by 6 digits.
Adding zeroes after the hexadecimal number can lead to the wrong character. Worse yet, exceeding the maximum range of the Unicode character set, which is the hexadecimal number 10FFFF, simply leads to an error.

Both of these cases are demonstrated below.

First, for adding zeroes at the end of the hexadecimal code:

'\u{61}'
'a'
'\u{0061}'
'a'
'\u{6100}'
'愀'
In the last statement, instead of adding zeroes before the hexadecimal number 61, we add them after it.
The result is that the hexadecimal number gets changed and likewise we get the wrong character output.

And second, for exceeding the maximum range:

'\u{61}'
'a'
'\u{610000}'
Uncaught SyntaxError: Undefined Unicode code-point
Clearly, the number 610000 is beyond the maximum value of 10FFFF, likewise JavaScript logs an error.
 */

/**
 * Lexicographic comparison :  <, <=, >, >=, === and !== 
 * How lexicographic comparison happens?
Iteration is performed over both the given strings simultaneously, comparing corresponding code units with one another.

If at any point a mismatch is found, the string with the code unit whose value is greater than the corresponding code unit in the other string is termed as lexicographically larger than that string; accordingly, the other string is termed as lexicographically smaller.

However, if no mismatch is found until either one of the strings has been exhausted by the iterations (i.e. its end reached), then at that point there are two possibilities:

The length of both the strings is the same. In that case, the string are exactly identical to one another.
The length of both the strings is NOT the same. In that case, the string with a larger length is lexicographically larger than the other one; accordingly, the other string is the lexicographically smaller one.

 */

/**
 * The string iterator - 
 * 
 * As an illustration, consider the following:

var str = 'Smile 🙂';

console.log(str.length);
console.log([...str].length);
8
7
Note: str.length returns the total number of code units in str, which are 8 in total (6 for 'Smile ' and 2 for '🙂'). 
However, [...str].length returns the number of elements in the array [...str] which altogether has 7 elements.

var chars = [...str]
undefined
chars[0]
'S'
chars[chars.length - 1]
'🙂'
 */
