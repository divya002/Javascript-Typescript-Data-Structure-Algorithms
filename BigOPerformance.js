function simpleSum(num) {
  let total=0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
}
//let time1=performance.now();
console.log(simpleSum(10000000));
//let time2=performance.now();
//console.log(time2-time1);
