class Graph {
  constructor(vertex,edge) {
    this.adjacentList = [];
    this.vertex=vertex;
    this.edge=edge;
  }
  addEdge(src, dest, weight) {
    let edge = {
      src: src,
      dest: dest,
      weight: weight
    };
    this.adjacentList.push(edge);
  }
  display() {
    console.log(this.adjacentList);
    let n=this.edge;
    console.log('-------------------------------------------');
    this.adjacentList=quicksort(this.adjacentList,0,n-1);
    console.log(this.adjacentList);
  }
  kruskal(){
    let n=this.edge;
    this.adjacentList=quicksort(this.adjacentList,0,n-1);
    let result=[];
    let ds=new DisjointSet(this.vertex);
//     while(this.adjacentList.length>0){
//     let edge=this.adjacentList.pop();
//     let edgeSrcParent=ds.find(edge.src);
//     let edgeDistParent=ds.find(edge.dest);
//     if(edgeSrcParent!=edgeDistParent){
//         ds.union(edge.src,edge.dest);
//         result.push(edge);
//     }
// }
for(let i=0;i<this.edge;i++){
    let edge=this.adjacentList[i];
    let edgeSrcParent=ds.find(edge.src);
    let edgeDistParent=ds.find(edge.dest);
    if(edgeSrcParent!=edgeDistParent){
        ds.union(edge.src,edge.dest);
        result.push(edge);
    }
}
console.log(result);
return result;
}
}
class DisjointSet {
  constructor(n) {
    this.parentArr = [...Array(n).fill(-1)];
  }
  find(i) {
    if (this.parentArr[i] < 0) {
      return i;
    } else {
      return this.find(this.parentArr[i]);
    }
  }
  union(x, y) {
    let xparent = this.find(x);
    let yparent = this.find(y);
    //opposite because comparing values in negative
    if (this.parentArr[xparent] > this.parentArr[yparent]) {
      this.parentArr[x] = yparent;
    //  this.parentArr[yparent] = this.parentArr[yparent] - 1;
    } else if (this.parentArr[xparent] < this.parentArr[yparent]) {
      this.parentArr[y] = xparent;
    //  this.parentArr[xparent] = this.parentArr[xparent] - 1;
    } else {
      this.parentArr[yparent] = xparent;
      this.parentArr[xparent] = this.parentArr[xparent] - 1;
    }
  }
  display(){
      console.log(this.parentArr);
  }
}
function partition(arr,left,right){
    let pivot=arr[right].weight;
    let j=left-1;
    for(let i=left;i<=right-1;i++){
        if(arr[i].weight<pivot){
            j++;
            [arr[j],arr[i]]=[arr[i],arr[j]];
        }
    }
   //swap
   [arr[j+1],arr[right]]=[arr[right],arr[j+1]]; 
   return (j+1);
}
function quicksort(arr, left, right) {
  
  if (left < right) {
    let pi = partition(arr, left, right);
    quicksort(arr, left, pi - 1);
    quicksort(arr, pi + 1, right);
  }
  //console.log(arr);
  return arr;
}

var graph = new Graph(9,14);
graph.addEdge(7, 6, 1);
graph.addEdge(8, 2, 2);
graph.addEdge(6, 5, 2);
graph.addEdge(0, 1, 4);
graph.addEdge(1, 2, 8);
graph.addEdge(3, 4, 9);
graph.addEdge(5, 4, 10);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 5, 4);
graph.addEdge(8, 6, 6);
graph.addEdge(2, 3, 7);
graph.addEdge(0, 7, 8);
graph.addEdge(3, 5, 14);
graph.addEdge(7, 8, 7);

graph.kruskal();


//ds.display();
