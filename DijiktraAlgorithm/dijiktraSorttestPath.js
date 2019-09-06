class weightedGraph {
  constructor() {
    this.adjacentList = {};
  }
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacentList[vertex1]) {
      this.adjacentList[vertex1].push({ Node: vertex2, weight });
    }
    if (this.adjacentList[vertex2]) {
      this.adjacentList[vertex2].push({ Node: vertex1, weight });
    }
  }
  dijktraSortedPath(start, end) {
    const prev = {};
    const distances = {};
    const nodes = new PriorityQueue();
    for (let vertex in this.adjacentList) {
      if (vertex === start) {
        distances[start] = 0;
        nodes.enqueue(start, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      prev[vertex] = null;
    }
    while (nodes.values.length) {
      let smallest = nodes.dequeue().val;

      //console.log(nodes);
      if (smallest === end) {
       // console.log("Reached to final node");
        console.log(distances);
        let path=[];
        path.push(smallest);
        while(prev[smallest]){
            path.push(prev[smallest]);
            smallest=prev[smallest];
        }
        console.log(path.reverse());
        break;
      } else {
       // if (smallest || distances[smallest] !== Infinity) {
          for (let i = 0; i < this.adjacentList[smallest].length; i++) {
            let nextNode = this.adjacentList[smallest][i];
            let nextNeibour = nextNode.Node;
            let tempDist = distances[smallest] + nextNode.weight;
            if (distances[nextNeibour] > tempDist) {
              distances[nextNeibour] = tempDist;
              prev[nextNeibour] = smallest;
              nodes.enqueue(nextNeibour, tempDist);
            }
         // }
        }

        //console.log(this.adjacentList);
      }
    }
    // console.log(nodes);
  }
  display() {
    //  console.log(this);
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
var graph = new weightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.dijktraSortedPath("A", "E");
graph.display();
