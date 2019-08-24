var colors = require("colors");
class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  display() {
    let temp = this.head;
    let printStr = "Start -->";
    while (temp != null) {
      printStr = printStr + temp.val + " -->";
      temp = temp.next;
    }
    printStr = printStr + " End ";
    console.log(printStr.rainbow);
  }
  push(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  //this approach can break if tail element occured before.
  pop1() {
    let temp = this.head;
    let prev;
    while (temp != null) {
      if (temp.next.val === this.tail.val) {
        prev = temp;
        break;
      }
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
  }
  //---------------------------------------------------------------------
  pop2() {
    if (!this.head) return undefined;
    let current = this.head;
    if (this.length > 1) {
      while (current.next.next) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
    }
    if (this.length === 0 || this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    let next = this.head.next;
    this.head = next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(data) {
    let newNode = new Node(data);
    let temp = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.head = newNode;
      this.head.next = temp;
      this.length++;
    }
    return this;
  }
  get(index) {
    if (index > this.length - 1 || index < 0) return null;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(current.val);
    return current;
  }
  insert(index, data) {
    if (index > this.length || index < 0) return false;
    if (index === 0) {
      return !!this.unshift(data);
    }
    if (index === this.length) {
      return !!this.push(data);
    }
    let count = 0;
    let current = this.head;
    while (count < index - 1) {
      current = current.next;
      count++;
    }
    let newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev=null;
    let next;
    let count=0;
    while(count<=this.length){
        next=temp.next
        temp.next=prev;
        prev=temp;
        temp=next;
        count++
    }
  }
}
let SSL = new SinglyLinkedList();
SSL.push(50);
SSL.push(90);
SSL.push(60);
SSL.push(10);
// SSL.pop();
// SSL.shift();
// SSL.shift();
// SSL.shift();
//SSL.unshift(100);
//SSL.set(4, 231);
SSL.display();
SSL.insert(0, 12);
SSL.display();
SSL.insert(5, 24);
SSL.display();
SSL.insert(2, 13);
SSL.display();
SSL.remove(2);
SSL.display();
SSL.reverse();
SSL.display();
