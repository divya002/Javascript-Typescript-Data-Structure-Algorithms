function productOfArray(arr) {
  if (arr.length > 0) {
    return arr.pop() * productOfArray(arr);
  } else if (arr.length === 0) {
    return 1;
  }
}
console.log(productOfArray([1, 2, 3, 4]));
