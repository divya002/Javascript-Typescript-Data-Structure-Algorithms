class maxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bottomHeapify();
    console.log(this.values);
  }
  removeMax() {
    let index = this.values.length - 1;
    [this.values[index], this.values[0]] = [this.values[0], this.values[index]];
    let max = this.values.pop();
    this.downHeapify();
    console.log(this.values);
    return max;
  }
  downHeapify() {
    let idx = 0;
    let length = this.values.length;
    while (true) {
      let swap = null;
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      if (leftChildIndex < length) {
        if (this.values[leftChildIndex] > this.values[idx]) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        if (
          (swap === null && this.values[rightChildIndex] > this.values[idx]) ||
          (swap !== null &&
            this.values[rightChildIndex] > this.values[leftChildIndex])
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx]
      ];
      idx=swap;
    }
  }
  bottomHeapify() {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] >= this.values[parentIndex]) {
        [this.values[index], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[index]
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}
let maxHeap = new maxBinaryHeap();
maxHeap.insert(100);
maxHeap.insert(120);
maxHeap.insert(90);
maxHeap.insert(110);
maxHeap.insert(70);
maxHeap.insert(100);
maxHeap.removeMax();
maxHeap.removeMax();
