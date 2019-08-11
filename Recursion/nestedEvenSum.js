function nestedEvenSum(obj, sum = 0) {
  let values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === "object") {
      sum=nestedEvenSum(values[i], sum);
    } else if (typeof values[i] === "number") {
      if (values[i] % 2 === 0) {
        sum = sum + values[i];
      }
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

console.log(nestedEvenSum(obj2)); // 6
//nestedEvenSum(obj2); // 10
