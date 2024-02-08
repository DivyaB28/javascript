// https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/

// Hashtables with object and Map classes

let obj = {
  Nathan: "555-0182",
  Jane: "315-0322",
};

console.log(obj.hasOwnProperty("Nathan"));

// JavaScript doesn't block an attempt to overwrite the hasOwnProperty() method,
// which may cause an error like this:

obj.hasOwnProperty = true;

// console.log(obj.hasOwnProperty("Nathan"));
// TypeError: obj.hasOwnProperty is not a function

/**
 * To handle these shortcomings, JavaScript created another implementation of the Hash Table data structure which is called Map

Just like Object, Map allows you to store key-value pairs inside the data structure. Here's an example of Map in action:
 */

const collection = new Map();

collection.set("Nathan", "555-0182");
collection.set("Jane", "555-0182");

console.log(collection.get("Nathan"));
console.log(collection.size);

// You also can't overwrite Map inherited properties. For example, the following code tried to overwrite the size property value to false:

collection["size"] = false;

console.log(collection.get("size")); // undefined
console.log(collection.size); // 2

for (let [key, value] of collection) {
  console.log(`${key} = ${value}`);
}

/**
 * You can implement a Hash Table in JavaScript in three steps:

- Create a HashTable class with table and size initial properties
- Add a hash() function to transform keys into indices
    A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method as follows.
    Note that the method is named using _ to indicate that it's a private method:

    But since the HashTable class only has 127 buckets, this means that the _hash() method 
    must return a number between 0 and 127.
- Add the set() and get() methods for adding and retrieving key/value pairs from the table.
 * 
 */

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  /**
   * To set the key/value pair in your Hash Table, you need to write a set() method that accepts  (key, value) as its parameters:

The set() method will call the _hash() method to get the index value.
The [key, value] pair will be assigned to the table at the specified index
Then, the size property will be incremented by one
   */

  set(key, value) {
    const index = this._hash(key);
    // this.table[index] = [key, value];

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        //Find the key value pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // not found, push a new key/value pair
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  /* 
 * To get a certain value from the Hash Table, you need to write a get() method that accepts a key value as its parameter:

The method will call the _hash() method to once again retrieve the table index
Return the value stored at table[index]
 */

  get(key) {
    const index = this._hash(key);
    // return this.table[index];

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  /**
   * This way, the get() method will return either the key/value pair back or undefined when there is no key/value pair stored in the specified index.
   */

  /**
   * To delete a key/value pair from the Hash Table, you need to write a remove() method that accepts a key value as its parameter:

Retrieve the right index using the _hash() method
Check if the table[index] has a truthy value and the length property is greater than zero.
 Assign the undefined value to the right index and decrement the size property by one if it is.
If not, simply return false
   */

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      //   this.table[index] = [];
      //   this.size--;
      //   return true;
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key} : ${value} ]`
      );
      console.log(`${index} : ${chainedValues}`);
    });
  }
}

const ht = new HashTable();
ht.set("Spain", 110);
ht.set("ǻ", 192);
ht.set("Canada", 150);
ht.set("France", 200);

console.log(ht.get("Spain")); // [ 'ǻ', 192 ]
console.log(ht.get("ǻ")); // [ 'ǻ', 192 ]
ht.display();

/**
 * Sometimes, the hash function in a Hash Table may return the same index number. In the test case above, the string "Spain" and "ǻ" both return the same hash value because
 * the number 507 is the sum of both of their ASCII code.
 * 
 * To handle the index number collision, you need to store the key/value pair in a second array so that the end result looks as follows:

[
    [
        [ "Spain", 110 ],
        [ "ǻ", 192 ]
    ],
    [
        ["France", 100]
    ],
]
 * 
 */
