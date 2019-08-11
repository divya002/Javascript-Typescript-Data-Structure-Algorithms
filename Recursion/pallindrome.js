// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) return true;
  else {
    if (str[0] === str[str.length - 1])
      return true || isPalindrome(slice(1,- 1));
    return false;
  }
}
console.log(isPalindrome("amanaplanacanalpanama")); // true
