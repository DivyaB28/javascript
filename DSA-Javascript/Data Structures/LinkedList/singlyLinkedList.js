class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //adding any node at the end of the list
  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }
  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //insert a newnode at a given index

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return new Error("index error");
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  // time: O(N)
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    // O(1) -> removing the head
    if (this.head.value === value) {
      this.head = this.head.value;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      //pass though list till prev.next exists and value is found
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
  }

  // to find node given its value

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  //reverse a linked list
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      //step 1: create a temporary next pointer that points to next node after current
      let next = curr.next;
      //step 2: make current node pointing previous
      curr.next = prev;
      //step 3: advance previous pointer
      prev = curr;
      //step 4: advance current pointer
      curr = next;
    }

    //loop ends make head as prev
    this.head = prev;
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();

list.insert(5, 0);
list.print();
console.log(list.size);
list.insert(35, 4);
list.print();

console.log(list.size);
console.log(list.removeFrom(-1));
list.print();
console.log(list.removeFrom(-1));

list.removeFrom(4);
list.print();

list.removeValue(40);
list.print();

console.log(list.search(10));
console.log(list.search(2));

list.reverse();
list.print();
