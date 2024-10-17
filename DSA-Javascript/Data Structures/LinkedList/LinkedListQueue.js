const LinkedList = require("./linkedListWithTail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
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
}

const queue = new LinkedListQueue();
console.log(queue.getSize());

console.log("enqueue");

queue.enqueue(10);
queue.print();
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.print();

console.log("dequeue " + queue.dequeue());
queue.print();
