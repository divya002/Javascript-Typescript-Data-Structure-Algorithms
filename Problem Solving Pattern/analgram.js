let str1Obj = {};
let str2Obj = {};
function validAnagram(str1, str2) {
  toObject(str1.toLowerCase(), str1Obj);
  toObject(str2.toLowerCase(), str2Obj);
  let arr = Object.keys(str1Obj);
  let flag = true;
  if (str1.length === str2.length) {
    for (var i = 0; i < arr.length; i++) {
      if (str1Obj[arr[i]] === str2Obj[arr[i]]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  return flag;
}
function toObject(str, obj) {
  let temp = str.split("");
  temp.forEach(ele => {
    if (obj[ele]) {
      obj[ele] = obj[ele] + 1;
    } else {
      obj[ele] = 1;
    }
  });
}

console.log(validAnagram("abc", "abcd"));
