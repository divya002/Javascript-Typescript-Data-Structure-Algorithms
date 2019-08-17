function binarySearch(arr, element) {
  let left = 0;
  let right = arr.length - 1;
  return binary(arr, left, right, element);
}
function binary(arr, left, right, element) {
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === element) return mid;
    else if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
} 

console.log(binarySearch([12,23,34,45],12));
