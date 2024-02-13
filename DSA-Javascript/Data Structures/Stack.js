/*
 * Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.first = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
      this.first = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.size;
  }
  //last in first out
  pop() {
    if (!this.top) return null;
    const temp = this.top;
    if (this.top === this.first) {
      this.first = null;
    }
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }
  peek() {
    if (this.top === null) {
      return new Error("Stack is empty");
    }
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
}

const stck = new Stack();
console.log(stck.isEmpty()); //true

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.top); /* 
          Node {
          value: 'value3',
          next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
          }
      */
console.log(stck.first); // Node { value: 'value1', next: null }
console.log(stck.size); // 3

stck.push("value4");
console.log(stck.pop()); // value4

console.log(stck.peek());
