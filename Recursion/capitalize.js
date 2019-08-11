function capitalizeFirst (arr) {
    if(arr.length===1){
        return [arr[0][0].toUpperCase() + arr[0].substring(1)];
    }
    let res=arr[arr.length-1][0].toUpperCase() + arr[arr.length-1].substring(1);
    let result=capitalizeFirst(arr.slice(0,-1));
    result.push(res);
    return result
  }
  
  console.log(capitalizeFirst(['car','bike','scooter'])); // ['Car','Taco','Banana']
  