function fab(n, memo) {
  if (memo[n]) return memo[n];
  else {
    if (n <= 2) return 1;
    let result = fab(n - 1, memo) + fab(n - 2, memo);
    memo[n] = result;
    return result;
  }
 
}
console.log(fab(1000, []));
