class Queue {
  constructor() {
    this.items = [];
  }
  //O(N)
  enqueue(ele) {
    this.items.push(ele);
  }
  //O(N)
  dequeue() {
    this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(7);
queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(4);

queue.print(); // 7,6,5,4
console.log(queue.size()); //4
console.log(queue.peek()); //7
queue.dequeue();
console.log(queue.peek()); //6
console.log(queue.size()); // 3
