# JavaScript Objects - Basics

### What are objects

An object is an unordered collection of properties.
A property is simply a characteristic, a trait, of an object. It is mainly composed of two parts: a key and a value.

An object is an unordered collection of key-value pairs.

### Object literal syntax

```
{key1: value1, key2: value2, ..., keyN: valueN}
```

Inside a pair of curly braces ({}), we put the properties of the object, each denoted as a key: value pair, separated from the other using a comma (,).

### Accessing properties

To retrieve a property's value in JavaScript, we could use either of two options: dot notation or bracket notation.

```
var lang = {
   name: 'JavaScript',
   yearReleased: 1995,
   'multi-paradigm': true
};

console.log(lang.multi-paradigm);
Uncaught ReferenceError: paradigm is not defined
   at <anonymous>:7:24
```

However, it's imperative to understand that this error is not a syntax error arising because of using the invalid hyphen character in the property name multi-paradigm, by is rather a runtime error following the way the expression is interpreted.

What's happening over here is that lang.multi-paradigm is interpreted as a subtraction operation (denoted with the - symbol) where paradigm is subtracted from lang.multi (which returns undefined).

### Modifying, adding and removing properties

Once an object gets created in memory, we could very easily modify, add and/or remove given properties from it. Doing so is again possible using either of the two notations: dot and bracket.

```
var point;

// add a new property x
point.x = 0;

console.log(point);
```

Line 4 throws an error since point is not an object — it's undefined — and we are trying to add a property to it, which is only possible on an object (or better to say, not possible on undefined at least).

To remove a property p from an object o, we use the following:

// dot notation
delete o.p
// bracket notation
delete o['p']

**all predefined properties on window are non-configurable i.e. they can't be deleted.**

Deleting a non-configurable property in non-strict mode, as we do above, returns false, whereas doing so in strict mode throws an error.

### The Object() constructor

var point = new Object();

console.log(point);

The expression new Object(), where Object() is called as a constructor, is effectively the same as the expression Object(), where Object() is called as a function.

Difference between {} and new Object()
Semantically (in terms of meaning), there is no difference between {} and Object().

But obviously, syntactically there is a difference — in fact, a big difference.

{} is shorter and doesn't involve a function invocation. On the contrary, new Object() is longer and involves a function invocation (and is, likewise, relatively slightly slower than {}).

In short, new Object() is not elegant and concise at all. Well, it's not even needed in any case!

There is absolutely no single reason to use new Object() in place of {} in code. It's not possible to create a new object in one single line solely using new Object().

To do so, we only have one option and that is to provide the object as a literal into the Object() constructor, which could just be simplified to using the literal directly (without passing it to new Object()).

### Reference passing

When an object value is stored in a variable, what's actually inside the variable is a reference to some location in memory that contains the object.

As we pass around the variable to other places, for e.g. provide it as a function argument, or assign it to another variable, we might be tempted to think that we are passing around the actual object but that's just NOT the case — instead we are passing around the reference.

```
var point = { x: 0, y: 0 };
var point2 = point;

point2.x = 10; // update point2's x property to 10

console.log(point.x); //10
console.log(point2.x);//10
```

Anyways, following from the fact that objects are passed around by their references and not by their actual values, if we make any change to the passed-on value, that change would be visible in actual object as well, and vice versa.

In short, whenever working with any kind of object in JavaScript (in this case with native objects), remember that it is passed around as a reference, and not as the actual value.

**A reference in JavaScript is simply the address of a memory location.**

### Iterating over an object using for...in

We could use the for...in loop to iterate over all the properties of an object and execute a piece of code for each of them.

```
function copyObject(o) {
   var newObject = {};

   for (var p in o) {
      newObject[p] = o[p];
   }

   return newObject;
}

var point = { x: 0, y: 0 };
var point2 = copyObject(point); // create a copy of point

point2.x = 10;

console.log(point.x); //0
console.log(point2.x);//10
```

### Comparing objects

Two objects in JavaScript are compared by their references.

```
var point1 = { x: 0, y: 0 };
var point2 = point1;

console.log(point1 === point2);//true
```

### Checking for a given property

1. Retrieving the property

```
var point = { x: 0, y: 0, z: 0 };

if (point.z) {
   console.log("We're modeling 3D!");
}
else {
   console.log("It's only 2D.");
}

output: It's only 2D.
```

This is because point.z evaluates to 0 which then gets coerced to the Boolean false, and as a result the if conditional fails causing exeuction to jump into the else block.

2. Property's value compared with undefined

A more effective way is to compare the value of the property-retrieval expression with undefined using the !== operator. If true is returned, we know for sure that the property exists, or else, if false is returned, we assert that it doesn't it.

```
var point = { x: 0, y: 0, z: 0 };

if (point.z !== undefined) {
   console.log("We're modeling 3D!");
}
else {
   console.log("It's only 2D.");
}

output : We're modeling 3D!
```

To boil it down, this second technique is not OK to test a property's existence whose value is undefined.

3. Using the in operator

The binary operator in is used to determine the existence of a particular property on a given object.

propName in obj

```
var obj = { x: undefined };

if ('x' in obj) {
   console.log("The property x exists.");
}
else {
   console.log("The property x does NOT exist.");
}

output: The property x exists.
```

# JavaScript Objects - Property Attributes

### What are property attributes and descriptor objects

A property descriptor is an object associated with a property that simply describes the property.

According to the notational convention used by the spec, all internal attributes are represented by a pair of double square brackets ([[]]). These internal attributes are only for explanatory purposes i.e. to describe the internal behavior of objects, explain algorithms for a given utility in the spec, etc.

Coming back to property descriptors, there are essentially two kinds of descriptors:

1. Data property descriptors
2. Accessor property descriptors

### Data properties and accessor properties

A data property is directly associated with a corresponding value.

When the property is read, the corresponding value is returned. Similarly, when a value is set on the property, the value is assigned as it is to the property — there is just nothing in between the retrieval or between the assignment.

Data properties have two internal attributes that classify them as a data property: [[Value]] and [[Writable]].

1. [[Value]] — simply contains the value associated with the given property.
2. [[Writable]] — a Boolean that specifies whether it's allowed to assign a new value to the property or not, which is commonly known as 'writing to the property'.

An accessor property is associated with functions that are called when the property is read or written to.

When the property is read, a function is called the getter is invoked. Similarly when the property is written to, the setter function is invoked.

Accessor properties define at least one accessor function by virtue of the following attributes:

1. [[Get]] — specifies a zero-arg function, known as the getter, to be called when the property is read.
2. [[Set]] — specifies a one-arg function, known as the setter, to be called when the property is assigned a value.

A data property can't have a [[Set]] or [[Get]] attribute likewise an accessor property can't have a [[Value]] or [[Writable]] attribute.

Now apart from these two sets of attributes, a property could have two other attributes as described below:

1. [[Enumerable]] — a Boolean specifying whether the property shows up in a for..in loop.
2. [[Configurable]] — a Boolean specifying whether the property's attributes could be changed or the property be deleted via the delete keyword.

### The Object.defineProperty() method

Object.defineProperty() intercalated in ECMAScript 5 to allow developers to configure property attributes of custom objects and, in some cases, of predefined objects as well.

Object.defineProperty(object, propertyName, propertyDescriptor)

The first object argument specifies the object on which to define the property, the second propertyName argument specifies the name of this property as a string, and finally the third argument specifies the property's descriptor object.

The propertyDescriptor object could have the following properties:

- value — specifes a value for the [[Value]] internal attribute.
- writable — specifes a Boolean for the [[Writable]] internal attribute.
- get — specifes a zero-arg function for the [[Get]] internal attribute.
- set — specifes a one-arg function for the [[Set]] internal attribute.
- enumerable — specifes a Boolean for the [[Enumerable]] internal attribute.
- configurable — specifes a Boolean for the [[Configurable]] internal attribute.

Specifying a property other than the ones shown above on the property descriptor object would simply be ignored.

Note that if the get and/or set properties are mentioned, then it's an error to set writable or value on the descriptor object.

As you can see, the nomenclature of all the properties shown above is synonymous to the nomenclature of the internal attributes with mainly one difference — the first letter of these properties is in lowercase.

### Attributes of data properties — [[Value]] and [[Writable]]

var obj = { a: 'old' };
obj.b = 'old';

Properties created in these normal ways are all data properties and have their [[Writable]] attribute set to true by default, and [[Value]] set to the given value ('old' in the case above).

[[Writable]] being true is the reason why an expression like obj.a = 'new' has an actual consequence.

```
var obj = { a: 'old' };
obj.b = 'old';

Object.defineProperty(obj, 'c', {
   value: 'old',
   writable: false
});

console.log(obj.c); //old

obj.c = 'new';

console.log(obj.c); //old
```

### Attributes of accessor properties — [[Get]] and [[Set]]

For a property to be termed an accessor property, it must have at least one of these accessor functions. The getter goes in the property's [[Get]] attribute whereas the setter goes in the property's [[Set]] attribute.

```
var point = { x: 0, y: 0 };

Object.defineProperty(point, 'distanceFromOrigin', {
   get: function() {
      return (this.x ** 2 + this.y ** 2) ** 0.5;
   }
});

point.x = 4;
point.y = 3;

console.log(point.distanceFromOrigin); //5
```

In addition to the getter, now we even define a setter. The function simply throws an error saying that distanceFromOrigin can't be set, when we have a set operation for the property!

```
var point = { x: 0, y: 0 };

Object.defineProperty(point, 'distanceFromOrigin', {
   get: function() {
      return (this.x ** 2 + this.y ** 2) ** 0.5;
   },
   set: function(value) {
      throw new Error("Can't set distanceFromOrigin!");
   }
});
point.distanceFromOrigin = 100

Uncaught Error: Can't set distanceFromOrigin!
   at Object.set (<anonymous>:8:13)
   at <anonymous>:12:26
```

### Enumerability and the [[Enumerable]] attribute

An enumerable property is one that shows up in a for...in loop.

The enumerable property of the descriptor object passed to Object.defineProperty() specifies a value for the [[Enumerable]] attribute. If false, the corresponding property being set of the object is non-enumerable, and if true, the property is enumerable.

```
var point = { x: 0, y: 0 };

Object.defineProperty(point, 'distanceFromOrigin', {
   get: function() {
      return (this.x ** 2 + this.y ** 2) ** 0.5;
   },
   set: function(value) {
      throw new Error("Can't set distanceFromOrigin!");
   },
   enumerable: true
});

for (var prop in point) {
   console.log(prop);
}

x
y
distanceFromOrigin
```

### Configurability and the [[Configurable]] attribute

A configurable property is one that could be deleted and whose attributes could be changed.

For instance, if a property x on an object o is configurable, then its [[Enumerable]] attribute could be changed from true to false, and vice versa, or it could be deleted via the expression delete o.x.

As with all other attributes, the corresponding property on the descriptor object for the [[Configurable]] attribute is configurable.

If true, the underlying property is configurable and if false, the underlying property is non-configurable.

```
var item = {
   sellingPrice: 100,
   discountPrice: 60
};

Object.defineProperty(item, 'id', {
   value: 1,
   configurable: true
});

item.id = 'new';

console.log(item.id); //1
```

In line 11, we aim to write a new value to the property id and then log it, in line 13. As expected, since the [[Writable]] attribute of id is false (because writable is omitted from the descriptor object above) it's not possible to change id via a property assignment expression.

So with [[Configurable]] set to true, and [[Writable]] still false, a property can't be written to by means of a normal assignment expression.

```
var item = {
   sellingPrice: 100,
   discountPrice: 60
};

Object.defineProperty(item, 'id', {
   value: 1,
   configurable: true
});

Object.defineProperty(item, 'id', {
   value: 'new',
   configurable: true
});

console.log(item.id); //new
```

Quite surprisingly, as can be seen in the console, the property has changed!

The [[Writable]] attribute of id is still false, nonetheless it didn't prevent id from being assigned a new value via another call to Object.defineProperty() above.

### How to remember all this

1. When a property is writable (regardless of the value of other attributes), we could change its [[Value]] manually or via a property assignment expression, for e.g. o.p = 10. Simple!
2. When a property is non-writable (regardless of the value of other attributes), we could not change its [[Value]] via a property assignment expression, for e.g. o.p = 10. Simple!
3. When a property is configurable and writable, essentially all operations are possible on the property. Simple!
4. When a property is configurable but non-writable, we couldn't use a property assignment expression, for e.g. o.p = 10, to change its value. This follows from 2). However, all other operations are still possible on the property including manually changing [[Value]] using Object.defineProperty(). This follows from 3). Simple!
5. When a property is non-configurable and an accessor property, no attribute could be changed. Simple!
6. When a property is non-configurable and non-writable, no attribute could be changed. Simple!
7. When a property is non-configurable but writable, no attribute could be changed except for [[Value]], as mentioned in 1), and [[Writable]], to make the property even more strict. Simple!

# JavaScript Objects - Constructors

### What are constructors

A constructor in JavaScript is a function that is meant to create, and optionally initialize an object.

the way we call the function and especially name it determines whether it's a constructor or not i.e. we call it with the new keyword and name it with an uppercase first letter (for e.g. Animal instead of animal).

In JavaScript, a constructor function can be pretty much thought of as a class from the OOP world.

### Creating and working with constructors

```
function Point() {
   console.log('A new point created.');
}

var p1 = new Point();
console.log(p1);
```

Once the constructor function completes, it returns the instance object created.

That is, the whole invocation expression new Point() gets replaced with the created instance object. In the code above, this object is stored in the variable p1. In line 6, we log this instance object.

The second log shows this instance object. It shows that the name of the constructor of the instance is displayed next to the instance's literal notation itself, which is empty in the case above.

```
function Point() {
   this.x = 0;
   this.y = 0;
}

var p1 = new Point();
var p2 = new Point();

console.log(p1);
console.log(p2);
```

Note that p1 and p2 defined here are two distinct objects. They have the same properties x and y and, at least for now, even the same values for those properties, but they are in no way identical to each other.

In other words, p1 === p2 would return false, as both the objects hold different references.

### Internals of a constructor — the [[Construct]] method

when a function is called, its internal [[Call]] method is invoked. Now, this only happens when the function is called in the context of a function, i.e. without the new keyword.

When a function is called in the context of a constructor, i.e. with the new keyword, the internal [[Construct]] method of the function object is called, if it exists.

Given a function F, the expression new F() executes the internal [[Construct]] method on F that performs the following steps:

- A new empty object is created.
- The prototype of this object is set to F.prototype. We'll understand this step much better once we learn about prototypes in the next chapter.
- The [[Call]] internal method of the function is executed with its this set to the object created in step 1.
- The object created in step 1 is returned.

Anyways, the most important steps to consider above are 1 and 3.

Step 1 states that calling new F() results in an empty object (an object with no own properties) being created behind-the-scenes.

Step 3 states that once this object is created (and its prototype set), the function is called just as any other normal JavaScript function is. That is, its internal [[Call]] method is invoked.

However, unlike an ordinary function, the this of a constructor is set to the newly created object. This allows the constructor function's body to initialize the newly-created object.

### Constructors with parameters

Let's do this using ES6 default-valued parameters:

```
function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;
}

var p1 = new Point();
console.log(p1);

var p2 = new Point(-2, 8);
console.log(p2);
```

### Adding methods to the instance

```
function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;

   this.setTo = function(x, y) {
      this.x = x;
      this.y = y;
   }
}

var p1 = new Point(-2, 8);

// Reposition p1 to (1, 5)
p1.setTo(1, 5);

console.log(p1);
```

### Problem with adding methods inside constructors

```
function Point(x = 0, y = 0) {
   /* ... */
}

var p1 = new Point(-2, 8);
var p2 = new Point();

console.log(typeof p1.setTo);
console.log(typeof p2.setTo);

p1.setTo == p2.setTo //false
```

p1 has its own setTo() method while p2 has its own setTo() method. Both these methods perform exactly the same task, yet they ain't the same.

```
function pointSetTo(x, y) {
   this.x = x;
   this.y = y;
}

function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;

   this.setTo = pointSetTo;
}

var p1 = new Point(-2, 8);
var p2 = new Point();

console.log(p1.setTo === p2.setTo); //true
```

### The instanceof operator

The instanceof operator as the name suggests tells us whether a given object is an instance of a given constructor (which we could also think of as a class, remember?).

Syntactically, here's how to use it:

obj instanceof F

```
function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;

   this.setTo = function(x, y) {
      this.x = x;
      this.y = y;
   };
}

var p1 = new Point(-2, 8);
var p2 = new Point();

console.log('p1 instanceof Point:', p1 instanceof Point); //true
console.log('p2 instanceof Point:', p2 instanceof Point); //true

{ x: 0, y: 0 } instanceof Point
false
{} instanceof Point
false

Point instanceof Point
false
```

### The constructor property

When an instance is created using a constructor, there is a constructor property available on the instance. This points to the constructor function used to create the object.

p1.constructor
ƒ Point(x = 0, y = 0) { ... }

### Calling the constructor of the parent class

```
function Shape(fill, x, y) {
   this.fill = fill;
   this.x = x;
   this.y = y;
}
```

```
function Rect(length, height, fill, x, y) {
   // Initialize Shape properties
   this.fill = fill;
   this.x = x;
   this.y = y;

   this.length = length;
   this.height = height;
}
```

instead

```
function Rect(length, height, fill, x, y) {
   // Initialize this Shape
   this.parent = Shape;
   this.parent(fill, x, y);

   this.length = length;
   this.height = height;
}
```

In the code above, when we call new Shape(), a new object is created and the properties fill, x and y added to that object. This is just the problem.

The Shape() constructor's invocation as a constructor simply creates a new binding for this, that is a new Shape instance. This instance is what receives all the initialization code of Shape().

or simply use call()

```
function Rect(length, height, fill, x, y) {
   // Initialize this Shape
   Shape.call(this, fill, x, y);

   this.length = length;
   this.height = height;
}
```

### Calling constructors as functions

```
function Point(x = 0, y = 0) {
   // If called as a function, throw an error.
   if (!(this instanceof Point)) {
      throw new Error('Illegal function call Point().');
   }

   // Otherwise, proceed as usual.
   this.x = x;
   this.y = y;

   this.setTo = function(x, y) {
      this.x = x;
      this.y = y;
   }
}

new Point(2, 3)
Point { x: 2, y: 3, setTo: ƒ }
Point(2, 3)
Uncaught Error: Illegal function call Point().
   at Point (<anonymous>:4:13)
   at <anonymous>:1:1
```

# QUIZ

```
function Parent() {
   this.a = 0;
}

function Child() {
   Parent();
   this.b = 1;
}

var c = new Child();
console.log(c.a);
```

```
function Parent() {
   this.a = 0;
   this.b = 0;
}

function Child() {
   this.b = 1;
   new Parent();
}

var c = new Child();
console.log(c.a, c.b); //undefined 1

```

```
function Parent() {
   this.a = 0;
   this.b = 0;
}

function Child() {
   this.parent = Parent;
   this.parent();
   this.b = 1;
}

var c = new Child();
console.log(c.a, c.b); // 0 1
```
