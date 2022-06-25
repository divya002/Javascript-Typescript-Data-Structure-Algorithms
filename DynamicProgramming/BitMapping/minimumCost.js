// 4 Job ,4 Worker cost matrix
const Cost = [
    [9, 2, 7, 8],
    [6, 4, 3, 7],
    [5, 8, 1, 8],
    [7, 6, 9, 4]
];

let n=4;
let mask=(1<<n)-1;
let dp=new Array(4);

for(let i=0;i<n;i++){
dp[i]=new Array(1<<n).fill(-1);
}

function minimumCost(i,mask){
    if(i===n){
        return 0;
    }

    if(dp[i][mask]!==-1){
        return dp[i][mask];
    }
    let answer=9999999;
    for(let j=0;j<n;j++){
        if(mask&1<<j)
        answer=Math.min(answer,Cost[i][j]+minimumCost(i+1,mask^(1<<j)));
    }
    dp[i][mask]=answer;
    return answer;
}

console.log(minimumCost(0,mask));