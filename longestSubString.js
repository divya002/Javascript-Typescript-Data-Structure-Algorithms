function findLongestSubstring(str) {
  let tempStr = {};
  let i = 0;
  let j = 0;
  let maxlen = 0;
  if (str.length > 0) {
    while (i <= str.length) {
      if (!tempStr[str[i]]) {
        tempStr[str[i]] = 1;
        maxlen = Math.max(maxlen, i - j);
        i++;
      } else {
        maxlen = Math.max(maxlen, i - j);
        j = j + 1;
        i = j;
        tempStr = {};
      }
    }
    return maxlen;
  }
  return 0;
}
console.log(findLongestSubstring("thisisawesome"));
