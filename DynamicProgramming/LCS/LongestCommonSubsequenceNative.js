//naive approach
function LCS(str1,str2,i,j){
    if(i==str1.length||j==str2.length){
        return 0
    }
    if(str1[i]==str2[j]){
        return 1+LCS(str1,str2,i+1,j+1);
    }
    else 
    return Math.max(LCS(str1,str2,i+1,j),LCS(str1,str2,i,j+1));
}

console.log(LCS('abcdefghij','ecdgi',0,0))




