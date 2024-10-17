const LinkedList = require("./linkedListWithTail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.getSize());
stack.print();

console.log("pop " + stack.pop());
console.log("peek " + stack.peek());
