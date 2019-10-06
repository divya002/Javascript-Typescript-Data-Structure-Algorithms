function partition(arr,left,right){
    let pivot=arr[right];
    let j=left-1;
    for(let i=left;i<=right-1;i++){
        if(arr[i]<pivot){
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

//let arr1=[10,80,30,90,40,50,60,7];
console.log(quicksort([10,80,30,90,40,50,60,7],0,7));//it will take last return
//console.log(arr1);