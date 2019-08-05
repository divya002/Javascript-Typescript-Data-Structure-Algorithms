function sameFrequency(num1, num2) {
  let obj = {};
  while (num1 > 0) {
    let digit = num1 % 10;
    obj[digit] ? obj[digit]++ : (obj[digit] = 1);
    num1 = parseInt(num1 / 10);
  }
  while(num2>0){
      let digit =num2 %10;
      if(obj[digit])
      {
          obj[digit]--;
      }
      else{
          return false;
      }
      num2 = parseInt(num2 / 10); 
  }
  console.log(obj);
  return true;
}
console.log(sameFrequency(536,345));