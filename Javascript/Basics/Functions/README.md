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

- In other JavaScript environments such as web workers or Node.js, instead of window, the global object is self or global respectively, and this neatly points to the respective object, so we don't need to worry about which environment we are in if we are using this. Another benefit of this.

```
// The global context.
console.log(this);

Window {window: Window, self: Window, document: document, name: "", location: Location, …}
```

### this and strict mode

As we have seen above, when a function is called directly, not as part of an object, its this resolves down to the global window object. Now this holds only as long as the script or function is running in non-strict mode.

In strict mode, when a function is called directly, not as part of an object, its this value is set to undefined.

Frankly speaking, the strict mode behavior seems to be more appropriate — when a function is NOT called as part of an object, i.e. there is no calling object for the function, its this is undefined.

Shown below is an example:

```
'use strict'

function f() {
console.log(this);
}

f();//undefined
```

# JavaScript Function Arguments

### Arity of a function and the length property

In the case of functions in JavaScript, arity refers to the number of parameters given in the function's definition, excluding default-valued, rest and destructured parameters.

To inspect the arity of given function in JavaScript, we access its length property.

```
function sum(a, b) {
   return a + b;
}

console.log('Arity:', sum.length); //2
```

### The arguments object

JavaScript provides an array-like object to all functions, excluding arrow functions, which could be used to inspect the total number of arguments passed to them, regardless of the fact that those arguments actually align with given parameters.

That is the arguments object.

arguments is a local variable created every time a function is called. It points to an array-like object that holds the list of all arguments passed into the function.

```
function f(a) {
   arguments[0] = 'new';

   console.log('arguments[0]:', arguments[0]);
   console.log('a:', a);
}

f('old');
arguments[0]: new
a: new
```

the function, in line 2, we change the value of the parameter a and then inspect both a and arguments[0]. a would obviously change, but the most interesting thing is that arguments[0] changes as well.

### The arguments.callee property

The purpose of arguments.callee was to be able to call an anonymous function recursively. Apart from it, there was no other way to do so, unless the anonymous function was assigned to some identifier.

```
var nums = [1, 2, 3, 4, 5, 6, 7];

var fibs = nums.map(function(n) {
   if (n === 1) return 0;
   if (n === 2) return 1;
   return arguments.callee(n - 1) + arguments.callee(n - 2);
});

console.log(fibs); //[0, 1, 1, 2, 3, 5, 8]

```

arguments.callee reduces the readability of code, and is relatively slower as compared to calling a function via its name. Plus, with it it's not mandatory to name the function — naming functions is highly useful if we want to be able to debug errors easily, as names show in stack traces.

It's also invalid to assign a value to arguments.callee in the case of an exotic arguments object.

### Rest parameters

A rest parameter encapsulates all the remaining arguments after the arguments for all non-rest parameters in the form of an array.

There can be only one rest parameter in a function, and it ought to be the last parameter. With these two prerequisites met, the parameter works as follows:

- When a function is invoked that has a rest parameter in it, each of the parameters preceding the rest parameter is resolved down with its respective argument. That is, the first argument goes into the first parameter, the second one goes into the second parameter and so on.

- When all the preceding parameters are resolved, the rest of the arguments are encapsulated in a fresh array and this assigned to the rest parameter.

As stated before, specifying more than one rest parameter inside a function, or specifying the rest parameter before some other parameter leads to an error:

The following code snippets illustrates this:

```
// invalid to have more than one rest param
function f(...rest1, ...rest2) {
   console.log(rest1, rest2);
}
// the rest param must be the last param
function f(...rest1, a) {
   console.log(rest1, a); //Uncaught SyntaxError: Rest parameter must be last formal parameter
}
```

### The spread operator

The spread operator converts an iterable sequence into a list of arguments.
...iterable

An iterable sequence simply refers to any object that can be iterated over. Examples of iterable sequences

### Default-valued parameters

function function_name(param1, param2 = defaultValue, param3, ...) {
// code
}
The parameter is denoted by putting an assignment syntax, i.e. an equals sign (=) followed by a value, after the parameter's name in the function definition.

This means that we could dynamically compute the default value using a function.

# JavaScript Function Closures

### What are closures

A function along with its lexical environment is collectively called a closure.
Be definition, all functions in JavaScript form closures.

**What is a lexical environment**

The term 'lexical' simply means 'source code' or in other words, 'relating to the text of a program'.

Js is rather lexically-scoped, also known as statically-scoped.

Lexical means relating to the source code, or simply based on the source code. Lexical environment for a function merely refers to the environment enclosing the function's definition. It's called lexical because it's based on the source code an remains fixed throughout the execution of a program.

### The [[Scopes]] attribute in Chrome

According to the ECMAScript spec, every function holds an internal attribute [[Environment]] that simply contains the lexical environment of the function.

```
var a = 'easy';

(function() {
   var b = 'easy';

   function f1() {
      console.log(a, b);
   }

   function f2() {
      var a = 'difficult';
      var b = 'difficult';
      f1();
   }

   f2(); // east easy
})();


(function() {
   var a = 'static';

   function f1() {
      console.log(a);
   }

   function f2() {
      var a = 'dynamic';
      f1();
   }

   // f2();
   console.dir(f1);
})();

```

### Retaining local environments of functions

```
function f1() {
   var a = 'difficult';

   return function() {
      console.log(a);
   };
}

var a = 'easy';
var f2 = f1();

f2(); //difficult
```

### Practical applications of closures

```
function defineSequence(a, d) {
   return function(n) {
      return a + n * d;
   }
}

var evens = defineSequence(2, 2);
console.log(evens(0), evens(1)); //2 4


var odds = defineSequence(1, 2);
console.log(odds(0), odds(1), odds(99));//1 3 199
```
