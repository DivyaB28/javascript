/**
 * Objective
Create a program that allows the user to choose from a given range of arithmetic operations, and then performs that operation on two input numbers.

Description
Back in the Addition Calculator Exercise, we created a program to add two input numbers.

Now you need to extend that program and perform any given operation on the two input numbers, other than just addition. The desired operation is itself specified as an input value.

As before, we begin with the two input prompts displaying the messages 'x:' and 'y:', respectively and then obtain the number out of each of the entered values.

The third prompt should ask for a letter that would specify the operation desired on the two input numbers, using the message 'Operation:'.

The entered letter must be one of the following:

a for addition.
s for subtraction.
m for multiplication.
d for division.
e for exponentiation.
r for remainder.
Finally, when all the inputs are received, the program should make the following output if the letter denoting the operation is one of the aforementioned letters:

<x> <operation_symbol> <y> = <result>
Here <x> and <y> are the first and second input numbers, <operation_symbol> is the symbol denoting the selected operation in JavaScript, and <result> is the result of the operation (as performed on the two input numbers).

For instance, if the value letter for the operation is s, then <operation_symbol> should be -. Similarly, if the letter is e, <operation_symbol> should be **, and so on.

However, if the letter for the operation is not one of those mentioned above, then the program should simply output the following:

Unknown operation

 */

var x = Number(prompt("x:"));
var y = Number(prompt("y:"));
var op = prompt("Operation:");

switch (op) {
  case "a":
    document.write(x + " + " + y + " = " + (x + y));
    break;
  case "s":
    document.write(x + " - " + y + " = " + (x - y));
    break;
  case "m":
    document.write(x + " * " + y + " = " + x * y);
    break;
  case "d":
    document.write(x + " / " + y + " = " + x / y);
    break;
  case "e":
    document.write(x + " ** " + y + " = " + x ** y);
    break;
  case "r":
    document.write(x + " % " + y + " = " + (x % y));
    break;
  default:
    document.write("Unknown operation");
}
