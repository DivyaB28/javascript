/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting
 */
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}

// This behavior is similar to variables declared with let and const.
