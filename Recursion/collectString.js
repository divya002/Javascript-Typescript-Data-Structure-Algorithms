const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

function collectStrings(obj) {
  let resultArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      resultArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      resultArr=resultArr.concat(collectStrings(obj[key]));
    }
  }
  return resultArr;
} 
console.log(collectStrings(obj));
