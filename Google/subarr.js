function subarraySum(arr, n, s)
    {
        let startIndex=0;
        let movingIndex=0;
        let currentSum=0;
        while(movingIndex<n && startIndex<n){
            if(s===0 && arr[movingIndex]===0){
                return [movingIndex+1,movingIndex+1];
            }else{
                if(currentSum===s){
                  //  console.log(currentSum);
                 // console.log(startIndex);
                    return [startIndex+1,movingIndex+1];
                }
                if(currentSum<s){
                    console.log(currentSum)
                  
                    currentSum+=arr[movingIndex];
                    movingIndex+=1;
                }
                if(currentSum>s){
                    console.log(startIndex);
                    currentSum-=arr[startIndex];
                    console.log(currentSum)
                    startIndex+=1;
                    console.log(startIndex);
                }
            }
        }
        return [-1];
        }

        let answer=subarraySum([1,2,3,7,5],5,12);
        console.log(answer);