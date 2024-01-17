Objective
Create a function to convert a given string into title case.

Description
Consider the string 'This is great.'. If we are to convert this string into title casing in a naive way, we'd get the string 'This Is Great.'.

Title casing can be performed in a multitude of ways, some taking into account certain elements of English grammar such as prepositions and certain conjunctions. There is no universal title casing standard and so different implementations have different rules.

For us, we define title casing in a very naive way. That is, a string in title case is one where the first character of every word is in upper case.

As mentioned before, the string 'This Is Great.' is in title case. The words 'This', 'Is' and 'Great.' all have their first characters in upper case.

Note that here our definition of a word is simply a sequence of characters with a space on its left or its right. Hence, the string 'Superb stunt' constitutes two words whereas the string 'Awe-inspiring' constitutes just one word.

In this exercise, you have to create a function toTitleCase() that converts a given string into title case, as discussed above, and then returns it.

Your solution MUST NOT use any array methods.

Shown below are a handful of examples of the function's usage:

toTitleCase('This is great.')
'This Is Great.'
toTitleCase('An awe-inspiring story!')
'An Awe-inspiring Story!'
toTitleCase('10 tips to become successful')
'10 Tips To Become Successful'
toTitleCase('hello world!')
'Hello World!'
toTitleCase('HELLO WORLD!')
'HELLO WORLD!'
toTitleCase(' ')
' '
toTitleCase('')
''
Note the string 'HELLO WORLD!' here. It was already in upper case and hence there was no effect of converting it into title case.
