class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek() {
    if (!this.first) return new Error("List is empty");

    return this.first.value;
  }
}

const quickQueue = new Queue();

quickQueue.enqueue("value1");
quickQueue.enqueue("value2");
quickQueue.enqueue("value3");

console.log(quickQueue.first); /* 
        Node {
            value: 'value1',
            next: Node { value: 'value2', next: Node { value: 'value3', next: null } }
        }
    */
console.log(quickQueue.last); // Node { value: 'value3, next: null }
console.log(quickQueue.size); // 3

quickQueue.enqueue("value4");
console.log(quickQueue.dequeue()); // value1

/**
 * The big O of queue methods is the following:

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
 */
