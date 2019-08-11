function fibonacciSeries(n) {
  let i = 0;
  let temp = [];
  while (i < n) {
    if (i > 1) {
      let pushTemp = temp[i - 1] + temp[i - 2];
      temp[i] = pushTemp;
    } else {
      temp[i] = 1;
    }
    i++;
  }
  return temp;
}
console.log(fibonacciSeries(9));
