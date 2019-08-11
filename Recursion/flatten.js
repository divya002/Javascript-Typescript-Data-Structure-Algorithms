function flatten(arr){
    let oldArr=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            oldArr=oldArr.concat(fltten(arr[i]));
        }
        else{
            oldArr.push(arr[i])
        }
    }
    return oldArr;
    // add whatever parameters you deem necessary - good luck!
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3