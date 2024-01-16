var num = 10;

console.log(num); // 10
console.log(num.toString()); // '10'

/**
 * The moment the JavaScript interpreter sees that a property/method is being accessed on a primitive, it boxes that primitive into an object and performs the property access on that object.

Each of the three primitive types — numbers, strings and Booleans, have a corresponding function that could be called in the context of a constructor to create an object for that primitive type.

For numbers, that function is Number(). When called in the context of a constructor, i.e. using the new keyword, it returns an object of type Number.
 */

/*
var num = 10;
var _num = new Number(num); // done automatically by JavaScript
console.log(_num.toString());
_num = null;
*/

/**
 * Floor & Ceil 
 * 
 * Math.floor(10.5)
10
Math.floor(10)
10
Math.floor(10.99999)
10
Math.floor(-5.6)
-6
Math.floor(-5.1)
-6
Math.floor(-5)
-5

Math.ceil(10.5)
11
Math.ceil(10)
10
Math.ceil(10.0005)
11
Math.ceil(-5.6)
-5
Math.ceil(-5.1)
-5
Math.ceil(-5)
-5
 */

/**
 * Scientific notation
 * hen representing huge or minute numbers with a large number of digits in them, it's convenient to reduce them down scientific notation.

Scientific notation — also known as standard form, standard notation — is when a number is represented is in the form shown below,

m×10^n
where m is called the mantissa, 10 is called the base and n is called the exponent.

<mantissa>e<exponent>

>> 1e3
1000
>>3.254e2
325.4
>>100e2
10000
>>1e-3
0.001
>>123e-1
12.3
>>100e-2
1

Keep in mind that JavaScript numbers are based on the IEEE-754 format, and so the maximum number possible to be represented in the language is roughly less than 1.8e308.

Creating a number larger in value than this maximum limit (or even equal to it) would result in it being replaced with Infinity as shown below:

>>5e1000
Infinity
>>1e310
Infinity
>>1e100 * 2e250
Infinity
>>1.8e308
Infinity

The Number.MAX_VALUE property
The MAX_VALUE property on the Number object represents the maximum number storable in JavaScript, based on the IEEE-754 floating-point format.

>>Number.MAX_VALUE
1.7976931348623157e+308
Going beyond this value would result in Infinity:

>>Number.MAX_VALUE * 2
Infinity

 */

/**
 *Converting to a number

 1. Number()
  Value	            Numeric equivalent
Number	            The number itself
'' (empty string)   	0
Non-empty string	    Parsed
true	                1
false	                0
undefined	            NaN
null	                 0
Object	                Parsed

>>Number('50')
50
>>Number('3.142')
3.142
>>Number(true)
1
>>Number(false)
0

2.parseInt()
>>parseInt('50')
50
>>parseInt('10px')
10
>>parseInt('a50')
NaN
>>parseInt('-50')
-50
>>parseInt('--50')
NaN
>>parseInt('    20')
20
>>parseInt('50.5')
50


3.parseFloat()

>>parseFloat('20.5a')
20.5
>>parseFloat('20a')
20
>>parseFloat('-100.123abc')
-100.123
>>parseFloat('a20')
NaN
>>parseFloat('abc')
NaN

4.unary plus operator(+)

The unary plus (+) operator takes an expression, converts it into a number and returns back the number.

>> +'20'
20
>>+'10.123'
10.123
>>+'-5.1'
-5
>>+'NaN'
NaN
>>+'Infinity'
Infinity
>>+'20a'
NaN
>>+true
1
 */

/**
 * NaN is a special number in JavaScript. It stands for 'Not a Number', and is used to represent the result of expressions or invocations that don't give a meaningful number.
 * 
 >>Number('20a')
NaN
>>Number('a20')
NaN
>>Number('abc')
NaN
 */

/**
 * Sepcial Numbers (NaN & Infinity)
 *
 * NaN stands for 'Not a Number' and is used to represent the result of a numeric expression that couldn't be a number, or that couldn't be defined.
 * An example is Number('a') — an alphabetic character can't convert to a number however Number() has to return back a number, so what it does is to return NaN.
 * 
 * Infinity is used to represent the result of a mathematically impossible calculation or an expression that exceeds in value beyond Number.MAX_VALUE.
 * Some examples are 1 / 0 and 2 ** 2 ** 20 (this is a humongous number with over 300000 digits!)
 * 
 >>Number('a')
NaN
>>+'20a'
NaN
>>Infinity - Infinity
NaN

    ** Checking for special numbers **
    1. isNaN()
    The isNaN() function simply tell us whether a given value is NaN or not.

   >> isNaN(2)
false
>>isNaN(Infinity)
false
>>isNaN(NaN)
true
>>isNaN(Infinity - Infinity)
true
>>isNaN('abc')
true


 * Why we need isNaN()?
As a beginner JavaScript developer, you might be intrigued to think that you won't need isNaN() to check whether a given number is NaN, and that the following check would do it all:

var num = NaN;
console.log(num === NaN);
Extremely surprisingly, the last statement here logs false, even though both the values being compared are equal to NaN.

Why? Why does NaN === NaN return false?

This is part of the IEEE-754 spec which states that two 'nan' values aren't equal to one another.
 *

2. isFinite()

value is a number, or coerced into one if it's not a number. The return value of the function is true if value is finite i.e. not Infinity, NaN and undefined; or otherwise false.

>>isFinite(2 ** 10000)
false
>>isFinite(2)
true
>>isFinite('10')
true
>>isFinite(Infinity)
false
>>isFinite(NaN)
false
>>isFinite(undefined)
false
 */
