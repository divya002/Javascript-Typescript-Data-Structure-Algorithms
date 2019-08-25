class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
var colors = require("colors");
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  display() {
    let current = this.head;
    let displayString = "Start-->";
    while (current) {
      displayString = displayString + current.val + "-->";
      current = current.next;
    }
    displayString = displayString + "End";
    console.log(displayString.rainbow);
  }
  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.tail;
      newNode.prev = current;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log(this);
  }
  pop() {
    if (this.length === 0) return null;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (this.length === 0) return null;
    let shifted = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    shifted.next = null;
    this.length--;
    return shifted;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.head;
      newNode.next = current;
      current.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    console.log(this);
    return newNode;
  }
  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let half = parseInt(this.length / 2);
    if (half >= index) {
      let current = this.head;
      for (let i = 0; i <= half; i++) {
        if (i === index) {
          console.log(current.val);
          return current;
        }
        current = current.next;
      }
    } else {
      let current = this.tail;
      for (let i = half + 1; i < this.length; i++) {
        if (i === index) {
          console.log(current.val);
          return current;
        }
        current = current.prev;
      }
    }
  }
  set(index, value) {
    let indexNode = this.get(index);
    if (indexNode) {
      indexNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) !!this.push(value);
    else {
      //   let foundNode = this.get(index);
      //   let newNode = new Node(value);
      //   newNode.next = foundNode;
      //   newNode.prev = foundNode.prev;
      //   foundNode = newNode;
      // there foundNode will be final list but it will be available here only
      let foundNode = this.get(index - 1);
      let newNode = new Node(value);
      let temp = foundNode.next;
      temp.prev = newNode;
      foundNode.next = newNode;
      newNode.next = temp;
      newNode.prev = foundNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) return !!this.shift(index);
    if (index === this.length - 1) !!this.pop();
    let foundNode = this.get(index);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length--;
    foundNode.next=null,foundNode.prev=null;
    return foundNode;
  }
}
let DDL = new DoublyLinkedList();
DDL.push(100);
DDL.push(101);
DDL.push(102);
DDL.push(103);
DDL.display();
DDL.pop();
DDL.display();
DDL.shift();
DDL.display();
DDL.unshift(53);
DDL.display();
//DDL.get(0);
DDL.insert(1, 10345);
DDL.display();
DDL.remove(2);
DDL.display();
