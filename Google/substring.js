function subString(s1,s2){
    let l1=s1.length;
    let l2=s2.length;
    let i=0,j=0,previousStart=0;
    let currentString='';
    while(previousStart<l1){
        let temp='';
        i=previousStart;
        j=0;
        while(i<l1&&j<l2){
            if(s1[i]===s2[j]){
                temp=temp+s2[j];
                i=i+1;
                j=j+1;
            }else{
                break;
            }
        }
        if(temp.length>currentString.length){
            currentString=temp;
        }
        previousStart=previousStart+1;
    }

    return currentString;

}

let result=subString('zacaacaab','acaab');
console.log(result);