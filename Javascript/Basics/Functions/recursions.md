# JavaScript Function Recursions

### What are recursions

A recursion is to call a function from within itself.

### The factorial function

```
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}
```

### The Fibonacci sequence

```
function fib(n) {
   if (n === 0) {
      return 0;
   }
   if (n === 1) {
      return 1;
   }
   return fib(n - 2) + fib(n - 1);
}
```

### How recursions work

Parsing a function in JavaScript

- When reading a JavaScript program, the moment a function is encountered, its body is alloted space in memory after being compiled.

- 'Compiled' simply means that the body is converted into a set of precise machine instructions so that each time the function is called, there is no need to convert the body to machine code again and again.

- Once this allotment of space in memory is done, step two is to take the address of the location where this code dwells in memory and assign that address to the name of the function. Hence, after alloting space to a function f()'s body, f would internally point to some memory location containing its respective body.

- In the case of a recursive function (which contains a call to itself in its body), there is absolutely nothing special to be done by the engine to parse and consequently compile it.

- The recursive call inside the function simply refers to the address where the function's code sits in memory. All the magic of recursion automatically happens when the machine code of the function's body (in memory) refers to itself via the same memory address.

Frames and the call stack

- The moment a function is called in JavaScript, all the local variables and parameters of the function are created in a new unit commonly referred to as a context, or a frame. This whole unit is alloted space in a special data structure known as the call stack.

- The reason for choosing a stack for holding function frames is due to the nature of nested function calls.

- That is, the last call in a series of nested function calls is to be evaluated first, followed by the second last call, followed by the third last call, and so on, until we reach the initial function. This resembles the stack data structure where the last item added is evaluated/removed first.

- Anyways, coming back to the idea of a function frame, the point at which the function exits, this whole frame is removed — or better to say, popped off — from the stack.

- In the case of a recursion, when the main function is called, its frame is pushed (i.e. added) on to the stack, followed by the execution of its body.

- Since it's a recursive function, its body calls itself. This pushes another frame on to the call stack, followed by executing this new function's body. Once again, another recursive call leads to another frame. And so on and so forth.

- As we reach the base case of the recursion, the current function exits and then one-by-one all the pending functions are exited starting with the ones called last. When the functions exit, their frames are popped off the stack (including all local variables and parameters) thereby freeing up memory space.

_the recursion limit is close to 14,000._

Anyways, due to this limit on the number of recursions allowed, it's usually advised to favor iteration over recursion whenever possible.

Iteration typically has less overhead than recursion, in addition to having no limit on the number of iterations allowed. Many recursive algorithms can be implemented very easily using an iterative approach.

# Js Function Methods

JavaScript is an object-oriented programming language i.e. it is based and built upon the idea of objects. Everything in JavaScript, excluding the primitive values, is an object.

This simply means that functions are objects as well. And hence, they could have properties and methods defined on them. In fact, functions in JavaScript have a couple of predefined properties and methods defined on them.

## The call() method

The call() method calls a function with a provided value for this as used inside the function and with given arguments for the function.

```
functionObj.call([thisValue[, arg1[, arg2[, ...[, argN]]]]])
```

## The apply() method

Back when there was no spread operator in JavaScript, a similar result was achieved using apply().

The apply() function method calls a function with a provided value for this and with given arguments passed to apply() in the form of an array.

```
var nums = [1, 50, 9, -4, -50, 0, 0, 10, 15, 13];
var min = Math.min.apply(null, nums);

console.log('The minimum number is:', min);

```

Remembering the distinction between call() and apply()
There's quite a good chance that we might forget which of the two methods call() and apply() takes arguments for the underlying function in the form of arguments and which one takes them in the form of an array.

It would be great if we could come up with some trick to remember this. Let's see some...

So there are two names 'call' and 'apply', right? Now which one of these immediately hints at invoking a function? 'Call' or 'apply'?

Well, 'call' is the more familiar term. It right away tells that we are about to call a given function. And since 'call' is more familiar, the call() method takes arguments in the form of arguments, which is the more familiar behavior.

Another trick could be to memorize that 'apply' and 'array' both begin with an 'a', likewise apply() takes arguments in the form of an array.

You could come up with any trick of your own and use that to remember this distinction.

## Bound functions and the bind() method

A bound function wraps an ordinary JavaScript function object with a given value of this, along with given arguments.

functionObj.bind([thisValue[, arg1[, arg2[, ...[, argN]]]]])
thisValue specifies the value to be used as this inside the function functionObj, while arg1, arg2, all the way to argN, represent arguments to functionObj.

This is the main difference between bind() and the other two function methods, call() and apply(). That is, bind() doesn't invoke the underlying function unlike call() and apply(). Rather, it returns back another function.

This returned function, which is called a bound function, has four internal properties according to the ECMAScript spec, that makes it be recognized as a bound function:

[[BoundTargetFunction]] - the function on which bind() was called.
[[BoundArguments]] - holds the set of arguments passed to bind(), starting from its second argument.
[[BoundThis]] - the value of this passed to bind().
[[Call]] - the method to execute the bound function.

Since bound functions have a slightly different internal behavior than normal functions, they are termed as exotic objects, as per the ECMAScript specification.

```
var name = 'Global';

function logName() {
   console.log(this.name);
}

logName(); // 'Global'


var obj = {name: 'Object'};
var logName2 = logName.bind(obj);

logName2(); // 'Object'
```

# JavaScript Arrow Functions

Learning outcomes:

### What are arrow functions

```
(param1, param2, ..., paramN) => {
   // Function body
}
```

### Arrow functions close over this

In particular, arrow functions do NOT have their own this.

The value of this inside an arrow function doesn't depend on how the function is called, or whether it's bound to a particular this by virtue of calling bind() or call().

Instead, the value of this inside an arrow function comes from the value of this from the outer lexical environment (the place where the function is defined).

```
var counter = {
   i: 0,

   init() {
      setTimeout(() => {
         this.i += 1;
         console.log(this.i);
      }, 1000);
   }
}
```

Notice how we're using this directly inside the callback provided to setTimeout() — this is because the callback is an arrow function, likewise it doesn't have its own this and instead uses this from its outer environment.

This simply means that the this inside the callback arrow function is the this in init(), which we know binds to the counter object.

### Arrow functions don't create their own arguments

Besides no own this, the second difference between regular functions and arrow functions is that the latter does NOT its own arguments object.

```
var f = () => {
   console.log(arguments);
};

f();
```

Here we get an error because arguments turns out be an undefined variable in the function. (Remember that arguments is also a local variable created implicitly by JavaScript.)
