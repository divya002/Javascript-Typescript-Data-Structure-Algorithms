function fabonacci(n){
    if(n<=2)return 1;
    let fabanacciTable=[0,1,1];
    for(let i=3;i<=n;i++){
        fabanacciTable[i]=fabanacciTable[i-1]+fabanacciTable[i-2];
    }
    return fabanacciTable[n];
}
console.log(fabonacci(10000));