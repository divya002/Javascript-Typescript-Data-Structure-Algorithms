function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  let flag = false;
  while (i < str1.length) {
    if (j < str2.length) {
      if (str1[i] === str2[j]) {
        flag = true;
        i++;
        j++;
      } else {
        j++;
      }
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}
console.log(isSubsequence("abc", "acb"));
