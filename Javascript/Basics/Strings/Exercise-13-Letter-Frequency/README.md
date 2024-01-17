Objective
Create a function to determine the frequency of letters of the English alphabet in a given string.

Description
Consider the following piece of text:

This is just amazing to know. I wish I was there.
Ignoring the character casing here, we see that the frequency of every single letter of the English alphabet (in lower case) is as follows:

Letter Count Letter Count Letter Count Letter Count
a 3 b 0 c 0 d 0
e 2 f 0 g 1 h 3
i 6 j 1 k 1 l 0
m 1 n 2 o 2 p 0
q 0 r 1 s 5 t 4
u 1 v 0 w 3 x 0
y 0 z 1
You can even confirm this table by counting the letters manually.

In this exercise, you have to create a function logLetterFrequency() to output such a piece of information about a given string.

The format of the output, which must be made to the console, shall be as follows:

a: count b: count c: count d: count
e: count f: count g: count h: count
i: count j: count k: count l: count
m: count n: count o: count p: count
q: count r: count s: count t: count
u: count v: count w: count x: count
y: count z: count
Each line must show the count of at most four characters, with each character's count represented in the form character: count, separated from another such statement by four spaces.

Here are a couple of things to keep in mind while coding the solution

You MUST use a for loop to make the output.
You MUST NOT use any nested for loops (i.e. for within a for) in any part of the code.
At the end of a line in the output produced by the code, there must be no spaces. The spaces must be only between the statements describing the counts of given characters.
