/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 str = str.toLowerCase();
let str1 = [];
let left = 0;
console.log(str);
console.log(str.charCodeAt(0));
let m=0
for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 123) {
    str1[m]=str[i];
    m++
  }
}
right=str1.length-1;
while (left < right) {
  console.log(left,right);
  if (str1[left] != str1[right]) {
    return false;
  }

  left++;
  right--;
}
return true;
}
module.exports = isPalindrome;