function NoOddNumberSeries(arr, i) {
  if (arr[i] % 2 !== 0) {
    return false;
  } else {
    i++;
    if (i < arr.length) {
      return NoOddNumberSeries(arr, i);
    } else {
      return true;
    }
  }
}
console.log(NoOddNumberSeries([12, 1, 30, 14, 78], 0));
