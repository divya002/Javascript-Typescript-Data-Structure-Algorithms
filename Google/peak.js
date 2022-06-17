function peakElement(arr, n)
{
    let ans=binaryPeakSearch(arr,0,n-1,n);
    return (ans)?ans-1:45;
}

function binaryPeakSearch(arr,low,high,n){
    if(low<=high){
    let mid=Math.floor((high+low)/2);
     if(mid>0){
      if(arr[mid-1]<=arr[mid]&&arr[mid+1]<=arr[mid]){
        return mid+1;
      }
     }
     if(mid==n-1){
       if(arr[mid-1]<=arr[high]){
         return mid+1;
        }
     }
          if(mid==0){
       if(arr[mid+1]<=arr[low]){
         return mid+1;
        } 
    }
    return binaryPeakSearch(arr,low,mid-1,n) || binaryPeakSearch(arr,mid+1,high,n);
    }
    return null;
}

let ans=peakElement([1,2,3,4,5,6],6);
console.log(ans)