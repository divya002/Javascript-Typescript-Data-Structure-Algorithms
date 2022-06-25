function countOne(num){
    let count=0;
    while(num){
        count+=((num & 1)===0)?1:0;
        num=num>>1;
    }
    return count;
}

console.log(countOne(16));