// SAMPLE INPUT / OUTPUT
const callback = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return false;
  }
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
console.log(someRecursive([8, 2, 8, 4], callback)); // true
