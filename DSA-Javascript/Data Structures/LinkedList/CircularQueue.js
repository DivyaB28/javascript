class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.currLength === 0;
  }

  isFull() {
    return this.currLength === this.capacity;
  }

  //add element at the end
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i,
        str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += `${this.items[i]} `;
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);

console.log(circularQueue.isEmpty());
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log(circularQueue.isFull());
circularQueue.print();

console.log(circularQueue.dequeue());

console.log(circularQueue.peek());
circularQueue.print();

console.log(circularQueue.enqueue(60));
circularQueue.print();
