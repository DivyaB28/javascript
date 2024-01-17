Objective
Create a function to extract all individual words from a given camel-cased string.

Description
Consider the string 'helloWorld'. As we know, it is in camel case.

Camel case is a casing convention of text whereby given words are joined next to each other, without any space in between, with the first letter of every word uppercased, except for the first one.

So if we have the two words hello and world, then representing these together in camel case would give us the word helloWorld.

The word HTMLElement obtained from the words HTML and Element is an example of using Pascal case, not camel case. Hence, we don't consider such words here that begin with an uppercase character.
In this exercise, you have to create a function getWords() that takes in a camel-cased string and returns back an array containing all the individual words in the string.

If the given string is empty (''), you MUST return back an empty array.

Note that you must not worry about the grammar of the given string, i.e. whether or not it's a valid camel-cased string. You should assume that it's a well-formed camel-cased string.

For example, 'to There' is not a well-formed camel-cased string, but thanks to our assumption, we can be rest assured that we won't be dealing with such strings in our function.

In addition to this, you should also assume that there are no digits in the given string. This assumption largely simplifies the underlying logic.

Shown below are a couple of examples of the usage of the function:

getWords('helloWorld')
['hello', 'World']
getWords('innerHTML')
['inner', 'HTML']
getWords('lastHTMLElement')
['last', 'HTML', 'Element']
getWords('insertAdjacentElement')
['insert', 'Adjacent', 'Element']
getWords('insertAdjacentHTML')
['insert', 'Adjacent', 'HTML']
getWords('')
[]
Note that there is are two special cases to deal with as shown above:

If a sequence of characters is in upper case, then that constitutes as a single word. For instance, innerHTML is comprised of the two words inner and HTML, where the latter is a sequence of uppercase words and hence, constitutes a single word.
There is an exception to this rule and that's when a sequence of uppercase characters is followed by a lowercase character. In this case, the sequence, excluding the last character, constitutes a single word. For instance, 'lastHTMLElement' is comprised of the words 'last', 'HTML', and 'Element'. Here the sequence HTMLE is followed by l and hence it constitutes the word 'HTML'.
Once again, note that in none of the strings passed to getWords() above do we have the first letter in uppercase — the first character is always in lowercase, as per the camel case convention.
