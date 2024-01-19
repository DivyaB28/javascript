# JavaScript Function Basics

### A quick recap of functions

A function is a block of code that is executed when the function is called.

### Function declarations and expressions

A function declaration refers to a function definition that exists as a standalone statement — not as an expression.

```
function functionName(param1, param2, ..., paramN) {
// Function's body
}
```

Here sum(), outerFn() and innerFn() are all function declarations, since they are standalone statements:

A function expression refers to a function definition that exists as an expression and not as a standalone statement.

```
var identifierName = function [ functionName ](param1, param2, ..., paramN) {
// Function's body
}

// Standalone statement,
// hence a function declaration.
function sum(a, b) {
return a + b;
}

// Another function declaration.
function outerFn() {

// A function declaration within outerFn().
function innerFn() {
console.log('Working with functions.')
}

}
```

Note that with a function expression, it's optional to include the name of the function after the function keyword (i.e functionName) as is apparent in the syntax above (with the presence of [ ] around functionName).

```
var sum = function(a, b) {
return a + b;
}
```

What's happening over here is that a function without a name is being assigned to the variable sum. Since, sum points to a function object in memory, we could use the expression sum().

If any given expression resolves down to a function object, that function object could be called by appending a pair of parentheses (()) after the expression. It is not necessary for the function to be named itself in order to call it. We just need to have some reference to the function in hand, which could be in the form of a variable, an array's element, an object's property, etc.

A function passed to another function as an argument is called a callback function, or simply a callback.

```
function getLogger() {
    return function(val) {
        console.log('We are learning ' + val + '.');
    }
}

var langIntro = getLogger();

langIntro('JavaScript'); //We are learning JavaScript.
```

### Difference between function declarations and expressions

There are mainly two differences between a function declaration and a function expression.

They're as follows:

1. One is hoisted while the other one is not.
2. One is capable of creating anonymous functions while the other is not.

   1. **_Hoisting_**

   Hoisting refers to the behavior of processing all variable declarations in their respective scopes before any other code is executed.

   ```
   // We think that x doesn't exist at this point, likewise
   // the following statement would throw an error.
   // However, that's not the case.
   console.log(x); // undefined


    var x = 10;
   ```

   What happens here internally is that the engine first searches for all variable declaration statements in the code and executes them all before running literally any other code. Once this is done, it then parses the code from the very beginning.

This means that before actually executing line 4 above, variable x is effectively declared and therefore accessible. Since var x initializes x to undefined, accessing x before the assignment statement in line 6 returns undefined.

function hoisting

The whole declaration along with the body of the function is taken to the very top of its scope.

```
console.log(sum(10, 20)); // 30

function sum(a, b) {
   return a + b
}
```

Function declarations inside block statements
As we know by now, all function declarations are hoisted to the top of their scope. However, there is a little exception to this idea, and in fact, an incompatibility across different browsers.

That is, if a function declaration appears inside a block statement, that's not another function's body (which is a block statement as well), the function declaration is not hoisted normally in the majority of browsers — only its name is made accessible with the value undefined.

There is a good reason for this behavior which is apparent in the code below:

```
var userIsNew = false;

if (userIsNew) {
function greet() {
console.log('Hello!');
}
}
```

The function greet() is placed inside the block statement of if. The condition upon which the block executes is that userIsNew is true. However, that's clearly not the case. And so, ideally the author of this code would expect the function to not appear in the global scope since its condition of appearance hasn't been met.

Likewise, in such a case, most browsers don't hoist the function declaration, but the name of the function is made available as an undefined identifier in the respective scope.

Some browsers, however, have an incompatibility in this scenario:

Safari, however, hoists the complete declaration just like any other function declaration regardless of whether the block statement, in which it dwells, executes or not.
Microsoft Edge, on the other hand, doesn't hoist anything, not even the name of the function.

The most important thing to realize over here is that functional hoisting is only limited to function declarations — NOT to function expressions.

```
console.log(sum(10, 20)); // throws error Uncaught TypeError: sum is not a function

var sum = function(a, b) {
   return a + b
}
```

We have a variable declaration statement var sum, likewise it's hoisted before running anything else. Next, execution starts at the beginning of the script with line 1. At this point, sum is equal to undefined, and therefore can't be called; likewise sum() throws an error.

The engine searches only for function declarations in a given piece of code and ultimately hoists them. Function expressions, be they named or anonymous, don't matter. They are expressions at the end of the day and would likewise be ignored in the hoisting phase.

### What are anonymous functions

Anonymous functions, which can only be denoted using function expressions, are a paramount feature in JavaScript.

```
(function(a, b) {
   return a + b;
});
```

the function definition is an expression, not a statement. This explains why the code doesn't throw an error even though there is no name in the function's definition.

This type of a function expression statement is extremely common in many many code snippets out there. It could be invoked immediately after it's defined, in which case it's called an Immediately Invoked Function Expression, or simply IIFE.

### What are IIFEs

An IIFE is a function expression that is invoked immediately, after being defined.
Shown below is an example of an IIFE:

```
(function() {
   console.log('I am in an IIFE.') //I am an IIFE.
})();
```

### Named function expressions

```
identifier = function functionName(param1, param2, ..., paramN) {
   // Function's body
}
```

Note that, as before, it's not necessary to assign the function expression to a variable. It could be used like any other valid expression in JavaScript i.e. passed to functions, returned from functions and so on.

```
var nums = [1, 2, 3];
var squares = nums.map(function toSquare(num) { return num ** 2; });

console.log(squares);
[1, 4, 9]
```

in ES5,

```
var nums = [1, 2, 3, 4, 5, 6];

var fibs = nums.map(function fib(n) {
   if (n === 1) return 0;
   if (n === 2) return 1;
   return fib(n - 1) + fib(n - 2);
});

console.log(fibs);
[0, 1, 1, 2, 3, 5]
```

That is, the name of the function expression isn't accessible in the scope where the function is defined, contrary to what one might expect. It's only accessible inside the function itself.

```
console.log(fibs);

// Log the function fib
console.log(fib);
```

### The this keyword

- this is a reserved keyword in JavaScript which means that it can't be used as a variable's name.

- When used inside a function, this refers to the object that called the function.

```
var o = {
   x: 10,
   f: function() { console.log(this.x); }
};

var x = 20;
o.f(); //10

```

- When a function object is called directly, not as part of an object, its this value resolves down to the global window object, given that the script is running in non-strict mode.

- Keep in mind that this idea of this resolving down to window would hold even when a function is called directly from inside another function. That is, this idea doesn't just hold for functions called in the global scope.

An illustration is shown below:

```
var o = {
   x: 20,
   f: function() { console.log(this.x); }
};

function f() {
   var func = o.f;
   func();
}

var x = 10;
f(); //10

```
