function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  let n = arr.length;
  if ((n === 0)) {
    return 0;
  } else {
    while (right < n) {
      if (arr[left] === arr[right]) {
        right++;
      } else {
        left++;
        arr[left] = arr[right];
      }
    }
    console.log(arr);
    return left + 1;
  }
}
console.log(countUniqueValues([]));
