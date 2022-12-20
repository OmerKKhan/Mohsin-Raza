// Task#1
// Given a string s, return true if x is palindrome.
// An sting is a palindrome when it reads the same backward as forward.
// Example 1: abba is a palindrome
// Example 2: abbac is not a palindrome
// Example 3: abdba is a palindrome
//abba
//abbba
var isPalindrome = function(s) {
  let length = s.length;
  let mid = Math.floor(length / 2);
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[length - 1 - i]);
    return false;

  }
  return true;

};


// Task # 2
// You have to write a function which takes an array of integers "seq" and an integer "target". There exist two elements of the array whose sum is equal to the target. You can assume that there exists only one solution. You have to return the indices of those elements

// [1,9,2,19]  Target = 3, Answer = 0,2

// [2,4]  Target = 6, Answer =0,1

var CheckSum = function(seq, target) {
  for (let i = 0; i < seq.length; i++) {
    for (let j = 0; j < seq.length; j++) {
      if (seq[i] + seq[j] === target) {
        return i, j;
      }
    }
  }

}