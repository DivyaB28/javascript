## Reference

[MDN Keyed Collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)

# Map object

A Map object is a simple key/value map and can iterate its elements in insertion order.

### Object and Map compared

Traditionally, objects have been used to map strings to values. Objects allow you to set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Map objects, however, have a few more advantages that make them better maps.

- The keys of an Object are strings or symbols, whereas they can be of any value for a Map.
- You can get the size of a Map easily, while you have to manually keep track of size for an Object.
- The iteration of maps is in insertion order of the elements.
- An Object has a prototype, so there are default keys in the map. (This can be bypassed using map = Object.create(null).)

# Set object

Set objects are collections of unique values. You can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection.

Note: Set objects store unique values—so any duplicate elements from an Array are deleted when converting!

## Array and Set compared

Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The Set object, however, has some advantages:

- Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
- Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
- The value NaN cannot be found with indexOf in an array.
- Set objects store unique values. You don't have to manually keep track of duplicates.
