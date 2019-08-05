function minSubArrayLen(arr, sum) {
  let i = 0;
  let j = 0;
  let tempSum = 0;
  let minlen = arr.length+1;
  while (i < arr.length) {
    tempSum = tempSum + arr[i];
    if (tempSum < sum) {
      i++;
    } else {
      minlen = Math.min(i - j + 1, minlen);
      j = j + 1;
      i = j;
      tempSum = 0;
    }
  }
  if(minlen>arr.length)
  return 0;
  return minlen;
}
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
