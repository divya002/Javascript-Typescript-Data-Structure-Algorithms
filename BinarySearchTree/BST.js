class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === data) return undefined;
      if (current.value > data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (current.value < data) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(data) {
    let current = this.root;
    let found = false;
    if(this.root===null) return undefined;
    if (this.root.value === data) {
      found = true;
      //return this.root;
    }
    let current = this.root;
    while (current && found === false) {
      if (current.value > data) {
        if (current.left.value === data) {
          return (found = true);
          //return current.left;
        }
        current = current.left;
      }
      if (current.value < data) {
        if (current.right.value === data) {
          return (found = true);
          //return current.right;
        }
        current = current.right;
      }
    }
    return found;
  }
}
let bst = new BST();
bst.insert(34);
bst.insert(12);
bst.insert(35);
bst.insert(23);
bst.insert(12);
console.log(bst);
