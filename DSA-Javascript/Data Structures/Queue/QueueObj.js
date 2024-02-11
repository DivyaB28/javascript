class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  //O(1)
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  //O(1)
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue); //Queue { items: {}, rear: 0, front: 0 }

queue.enqueue("item1");
queue.enqueue("item2");
queue.enqueue("item3");
queue.enqueue("item4");

queue.print(); //{ '0': 'item1', '1': 'item2', '2': 'item3', '3': 'item4' }
console.log(queue.size()); //4
queue.dequeue();
queue.print(); //{ '1': 'item2', '2': 'item3', '3': 'item4' }
console.log(queue.peek()); //item2
