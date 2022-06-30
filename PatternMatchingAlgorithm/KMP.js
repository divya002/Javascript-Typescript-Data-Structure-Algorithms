function calculateLCS(str, N) {
    //longest prefix sufix
    let lps = [null,0];
    let len = 0;
    let i = 1;
    while (i < N) {
        if (str[i] === str[len]) {
            len++;
            lps.push(len);
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps.push(len);
                i++;
            }
        }
    }
    return lps;
}

function KMS(str1, str2) {
    let M = str1.length;
    let N = str2.length;
    let lcs = calculateLCS(str2, N);
    let i = 0, j = 0;
    while (j < N && i < M) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            if(j==0){
                i++
            }else
            j = lcs[j];
        }
    }
    if (j === N) {
        return (i - j);
    } else {
        return null;
    }


}

let result = KMS('divyaprakash','ivy');
console.log(result);
