function bubblesort(arr){
    let noswaps;
    for(let i=0;i<arr.length;i++){
        noswaps=true;
        for(let j=0;j<(arr.length-i+1);j++){
           // console.log(j);
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                noswaps=false
            }
            //console.log(arr);
        }
        if(noswaps)break;
    }
    return arr;
}
console.log(bubblesort([14,29,30,18,37]));