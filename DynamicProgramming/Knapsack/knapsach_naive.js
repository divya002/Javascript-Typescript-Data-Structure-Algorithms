function knapsack(W,weight,value,n,memo){
if(n==0 || W==0)
return 0;
else  if(memo[n-1][W])
return memo[n][W];
else if(weight[n-1]>W){
    memo[n][W]=knapsack(W,weight,value,n-1);
    return memo[n][W];
}else{
    memo[n][W]=Math.max(value[n-1]+knapsack(W-weight[n-1],weight,value,n-1,memo),knapsack(W,weight,value,n-1,memo));
    return memo[n][W];
}
}

let val = [60, 100, 120 ];
let  wt = [ 10, 20, 30 ];
let W = 50;
let memo=new Array(wt.length+1);
for(let i=0;i<memo.length;i++){
    memo[i]=new Array(W+1).fill(null);
}
let result=knapsack(W,wt,val,val.length,memo);
console.log(memo);