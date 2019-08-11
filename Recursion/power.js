function power(m, n) {
  if (n > 0) {
    return m * power(m, n - 1);
  }
  return 1;
}
console.log(power(2,10));