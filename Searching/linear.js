function linearSearch(arr,element){
    // add whatever parameters you deem necessary - good luck!
    for(let i=0;i<arr.length;i++){
        if(arr[i]===element){
            return i
        }
    }
    return -1;
  }
  console.log(linearSearch([12,34,23,45,11],11));