function mergesort(left,right,arr){
    let mid=Math.floor((right+left)/2);
    if(left<right){
        mergesort(left,mid,arr);
        mergesort(mid+1,right,arr);
        merge(left,mid,right,arr);
    }
//return arr;
}
function merge(left,mid,right,arr){
    let leftASize=(mid-left+1);
    let rightASize=(right-mid);
    let leftA=[];
    let rightA=[];
    for(let i=0;i<leftASize;i++){
        leftA[i]=arr[left+i];
    }
   // console.log(leftA);
    for(let i=0;i<rightASize;i++){
        rightA[i]=arr[mid+i+1];
    }
  // console.log(rightA);
  let i=0;
  let j=0;
  let k=left;
  while(i<leftASize && j<rightASize){
      if(rightA[j]<leftA[i]){
          arr[k]=rightA[j];
          k++;
          j++;
      }else{
          arr[k]=leftA[i];
          i++;
          k++;
      }
  }
  while(i<leftASize){
      arr[k]=leftA[i];
      i++;
      k++;
  }
  while(j<rightASize){
    arr[k]=rightA[j];
    j++;
    k++;
}
//return arr;
}
//console.log(mergesort(0,5,[10,80,30,90,40,50]));
//console.log(merge(4,5,7,[12,34,1,2,3,45,67,98]));
let arr1=[10,80,30,90,40,50,60,7];
mergesort(0,7,arr1);
console.log(arr1);