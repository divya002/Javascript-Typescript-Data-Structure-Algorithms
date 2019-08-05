function maxSubarraySum(arr,n){
    let maxSum=0;
    if(n>arr.length){
        return null;
    }else{
    for(let i=0;i<n;i++)
    {
        maxSum+=arr[i];
    }
    let tempSum=maxSum;
    for(let i=n;i<arr.length;i++){
        tempSum=tempSum-arr[i-n]+arr[i];
        maxSum=Math.max(tempSum,maxSum);
    }
    return maxSum;
}
  }
  console.log((maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)));