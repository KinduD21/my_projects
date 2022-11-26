function isPalindrome(value) {
  let reverseStr = value.split("").reverse().join("");
  return reverseStr === value;
}

console.log(isPalindrome("121"));
console.log(isPalindrome("boob"));
console.log(isPalindrome("true"));
