function LCS(str1,str2,i,j,memo){ 
   // console.log(i,j);
    if(i==str1.length||j==str2.length){
        return 0
    }
    if(memo[i][j])
    return memo[i][j];
    if(str1[i]==str2[j]){
        return (memo[i][j]=1+LCS(str1,str2,i+1,j+1,memo));
    }
    else {
        memo[i][j]=Math.max(LCS(str1,str2,i+1,j,memo),LCS(str1,str2,i,j+1,memo));
        return memo[i][j];
    }
    
}
let memo=new Array(10);
for(let i=0;i<10;i++){
    memo[i]=new Array(10).fill(null);
}

console.log(LCS('defghi','egi',0,0,memo))