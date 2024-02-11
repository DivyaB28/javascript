class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //last in first out
  pop(val) {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stck = new Stack();

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first); /* 
          Node {
          value: 'value3',
          next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
          }
      */
console.log(stck.last); // Node { value: 'value1', next: null }
console.log(stck.size); // 3

stck.push("value4");
console.log(stck.pop()); // value4
