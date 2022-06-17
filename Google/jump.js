function minJumps(arr,n){
    let index=0;
    let jump=0;
    let currentMaxJumpLength=arr[index];
    let startIndex=0;
    if(n===1 && arr[0]===0){
        return 1;
    }else{
        let currentMax=currentMaxJumpLength;
        while(index<n){
          if(arr[index]>arr[currentMaxJumpLength] ){
              currentMax=index;
              
          }
          if(currentMaxJumpLength==index){
            jump=jump+1;
                  index=startIndex+currentMax;
                  startIndex=index;
                  currentMaxJumpLength=startIndex+arr[startIndex];
                  currentMax=currentMaxJumpLength;
                  if(index>n){
                      return jump;
                  }
                  if(arr[index]===0)
                  return -1;
          }
          index++
        }
        return -1;
    }
}

let ans=minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],11);
console.log(ans);
