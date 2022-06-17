function partition_random(arr,low,high){
    let i=low-1;
    let random=Math.floor(Math.random() * (high - low + 1) + low);
    [arr[high],arr[random]]=[arr[random],arr[high]];
    let pivot=arr[high];
    for(let j=low;j<high;j++){
        if(arr[j]<=pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    console.log(i+1);
    return i+1;
}
function quicksort(arr,low,high){
    if(low<high){
        let pi=partition_random(arr,low,high)
        quicksort(arr,low,pi-1);
        quicksort(arr,pi+1,high);
    }
}
let arrd=[5,13,9,12,7,15,11,6];
quicksort(arrd,0,7);
console.log(arrd);
