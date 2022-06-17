class Solution{
    constructor(){
       this.memo=[];
    }
    prepareTable(row,column){
        this.memo=new Array(row+1);
        for(let i=0;i<=row;i++){
            this.memo[i]=new Array(column+1).fill(null);
        }
        return this.memo;
    }

    lowesetCommonSequence(str1,str2,n1,n2,M){
        for(let i=0;i<=n1;i++){
            for(let j=0;j<=n2;j++){
                if(i==0||j==0){
                    M[i][j]=0;
                }
                else if(str1[i-1]===str2[j-1]){
                    M[i][j]=1+M[i-1][j-1];
                }
                else
                M[i][j]=Math.max(M[i-1][j],M[i][j-1]);
            }
        }
        return M[n1][n2]
    }

    printSequence(n1,n2,memo,str1){
        let i=n1,j=n2;
        let sequence='';
        while(i>0&&j>0){
           if(memo[i][j]===memo[i-1][j]){
                   i=i-1;
                   continue;
           }
           if(memo[i][j]===memo[i-1][j]){
               j=j-1;
               continue;
        }
        if(memo[i][j]==1+memo[i-1][j-1]){
              sequence=str1[i-1]+sequence;
              i=i-1;
              j=j-1;
              continue;
        }
        }
        return sequence;
    }

}

let s=new Solution();
let M=s.prepareTable(10,5)
let result=s.lowesetCommonSequence('abcdefghij','ecdgi',10,5,M);
let sequence=s.printSequence(10,5,M,'abcdefghij')
console.log(M);
console.log(sequence);