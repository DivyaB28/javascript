/**
 * 
 * @param {*} word 
 * @returns 
 * Objective
Create a program that asks the user to enter a word, and determines whether it is a palindrome or not.

Description
A palindrome is a word that reads the same forwards and backwards.

For example, 'ada' is a palindrome. If you read it forwards, it's 'ada'; and similarly, if you read it backwards, it's still 'ada'. Since it's same in both directions, it's a palindrome.

Now, consider the word 'bulb'. Forwards, it's read as 'bulb'. But backwards, it's read as 'blub'. Since both these directions yield different words, 'bulb' is not a palindrome.

By this means, every single letter is a palindrome as well. 'a' is a palindrome, 'b' is a palindrome, and so on and so forth.

In this exercise, you have to create a program that asks the user to enter a word, and then outputs backs 'Yes' if it is a palindrome, or otherwise 'No'.

You must create a function for this exercise.

The input prompt asking for the word shall display the text 'Enter a word:'.

If the entered word is a palindrome, output the following:

Yes, '<word>' is a palindrome.
However, if the entered word is not a palindrome, output the following:

No, '<word>' is not a palindrome.
In both these snippets, <word> is the word entered by the user.
 */

function isPalindrome(word) {
  for (var i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) return false;
  }
  return true;
}

var word = prompt("Enter a word:");
if (isPalindrome(word)) {
  document.write("Yes, '" + word + "' is a palindrome.");
} else {
  document.write("No, '" + word + "' is not a palindrome.");
}
