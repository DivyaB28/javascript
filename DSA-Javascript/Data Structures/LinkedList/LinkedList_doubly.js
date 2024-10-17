class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let list = "";

      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.tail;
      let list = "";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.prev;
      }
      console.log(list);
    }
  }
}

const doubly = new DoublyLinkedList();

doubly.append(10);
doubly.append(20);
doubly.append(30);
doubly.append(40);

doubly.print();
doubly.printReverse();
doubly.removeFromEnd();
doubly.print();
doubly.removeFromFront();
doubly.print();
