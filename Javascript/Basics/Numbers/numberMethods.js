/**
 * Rounding to given significant figures using toPrecision()
 * Rounding to given decimal places using toFixed()
 * Converting to exponential notation using toExponential()
 * Converting numbers to binary, octal and hexadecimal
 */

/** 
 * toPrecision()
 * The toPrecision() method rounds a number to a given number of significant digits.
 * Its syntax is pretty basic:

    number.toPrecision(precision)
    It takes in a precision argument and returns back a string holding number in its rounded form.

Note that precision must be between 1 and 100. 
Giving a value out of this range would result in an error. 
Moreover, if precision is a non-integer value, it is rounded to the nearest integer.

>>58 .toPrecision(2)
'58'
>>58 .toPrecision(3)
'58.0'
>>124 .toPrecision(3)
'124'
>>124 .toPrecision(4)
'124.0'

Why is there a space in 58 .toPrecision(2)?
Notice the space between each number and . character given above. It is necessary. Why?

This ensures that the JavaScript interpreter doesn't parse the . as a decimal point.

Removing the space, as in 58.toPrecision() would lead to an error. This is because with the space removed, the interpreter would think that . is a decimal point and so would be followed by numeric digits, but this doesn't happen — instead the word toPrecision() follows and this counts as invalid code, causing the error.

>>1.2386 .toPrecision(2)
'1.2'
>>1.2386 .toPrecision(3)
'1.24'
>>1.2386 .toPrecision(4)
'1.239'

In cases where precision is less than the number of digits already in the given number, the returned string is in exponential notation.
>>58 .toPrecision(1)
'6e+1'
>>124 .toPrecision(1)
'1e+2'
>>124 .toPrecision(2)
'1.2e+2'
>>178 .toPrecision(2)
'1.8e+2'
>>17000 .toPrecision(1)
'2e+4'
>>17000 .toPrecision(2)
'1.7e+4'
>>17000 .toPrecision(3)
'1.70e+4'
>>17000 .toPrecision(4)
'1.700e+4'
>>17000 .toPrecision(5)
'17000'
 */

/**
 * Converting to exponential notation
 * toFixed()
 * The toFixed() method rounds a number to a given decimal places and returns back the result in the format of a string (akin to toPrecision()).
 * 1 .toFixed()
'1'
1 .toFixed(0)
'1'
1 .toFixed(1)
'1.0'
1 .toFixed(2)
'1.00'
1 .toFixed(5)
'1.00000'
1.1286.toFixed()
'1'
1.1286.toFixed(0)
'1'
1.1286.toFixed(1)
'1.1'
1.1286.toFixed(2)
'1.13'
1.1286.toFixed(3)
'1.129'
The toFixed() method is commonly used in applications where we deal with billing, currency and financial statistics. Currency is typically represented with 2 decimal places i.e $0.00, $2.25, $100.07, etc, which means that the invocation toFixed(2) is made on such numbers.

 */
//In the code below, we log a simple message containing some billing info:
var price = 3; // price in $
var qty = 10;
console.log("Your total bill is: $" + (price * qty).toFixed(2));

/**
 * Converting to exponential notation
To convert any number into exponential notation, also known as scientific notation, we use the toExponential() method.

The toExponential() method takes in an argument and returns back a string holding its equivalent value in exponential notation.

152 .toExponential(0)
'2e+2'
152 .toExponential(1)
'1.5e+2'
152 .toExponential(2)
'1.52e+2'
152 .toExponential()
'1.52e+2'

243.74.toExponential(0)
'2e+2'
243.74.toExponential(1)
'2.4e+2'
243.74.toExponential(2)
'2.44e+2'
243.74.toExponential(3)
'2.437e+2'
 */

/**
 * Converting numbers to different bases
 * One fairly useful method of numbers in JavaScript is the toString() method.

Although it merely converts a number into a string when called with no arguments, if it's provided with an argument, it will perform conversion of the number into the given base n representation.
The argument has to be a number and is generally called the radix of the converted number. Radix is simply the base, we wish to convert a number into.

 */
var num = 15;

// conversion to binary
var binNum = num.toString(2); // "1111"

// conversion to octal
var octNum = num.toString(8); // "17"

// conversion to hexadecimal
var hexNum = num.toString(16); // "f"
/**
 * Since we can't have the bases 0 or 1 to represent numbers, calling toString(0) or toString(1) will throw errors.
 */
var binNum = "10110";
/*
Note that this method also converts the number into a string; which is, in effect, its sole purpose. 
Therefore, before working with the converted number just make sure to parse it using parseInt() and the respective base of the number.
*/
var hexNum = parseInt(binNum, 2).toString(16); // "16"
