/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let f=0;
    str=str.toLowerCase();
    str=str.split("");

    str.forEach(ele => {
      if(ele==="a" || ele==="e"||ele==="i"||ele==="o"||ele=="u"){
        f++;
    }});
    return f;
}

module.exports = countVowels;