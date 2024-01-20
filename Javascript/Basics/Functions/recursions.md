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

## Bound functions and the bind() method
