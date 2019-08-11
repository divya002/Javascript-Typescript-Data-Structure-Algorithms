// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(n){
    if(n>0){
        return n+recursiveRange(n-1);
    }
    return 0;
 }
 console.log(recursiveRange(6));
 