let dist  = [
    [0, 10, 15, 20],
    [10, 0, 25, 25],
    [15, 25, 0, 30],
    [20, 25, 30, 0]
];

const N=4;
const mask= (1<<N)-1;

let dp=new Array(4);

for(let i=0;i<N;i++){
dp[i]=new Array(1<<N).fill(-1);
}

function tsp(start,mask){
    let minCost=9999999999;
    if(mask===1){
        return dist[start][0];
    }
    if(dp[start][mask]!==-1){
        return dp[start][mask];
    }
    for(let i=1;i<N;i++){
        if(mask&(1<<i))
        minCost= Math.min(minCost,(dist[start][i]+tsp(i,mask^(1<<i))));
    }
    dp[start][mask]=minCost;
    return minCost;
}

console.log(tsp(0,mask));
//console.log(dp)