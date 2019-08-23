function digitCounts(num) {
  let count = Math.floor(Math.log10(Math.abs(num))) + 1;
  return count;
}
function getDigitAt(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function maxDigits(arr) {
  let maxdigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxdigit = Math.max(maxdigit, digitCounts(arr[i]));
  }
  return maxdigit;
}
function radixsort(arr) {
  let maxdigit = maxDigits(arr);
  for (let i = 0; i < maxdigit; i++) {
    let n = arr.length;
    let digitBucket = Array.from({ length: n }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigitAt(arr[j], i);
      digitBucket[digit].push(arr[j]);
    }
    arr = [].concat(...digitBucket);
  }
  return arr;
}
console.log(radixsort([23, 345, 5467, 12, 2345, 9852]));
