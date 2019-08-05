function averagePair(arr,avg){
    let n=arr.length;
    let i=0;
    let j=n-1;
    while(i<j){
        let average=(arr[i]+arr[j])/2;
        if(average===avg){
            return true;
        }
        else if(average<avg){
            i++;
        }
        else{
            j--;
        }
    }
    return false;
  }