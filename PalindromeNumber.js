//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
  let y = x.toString();
  y = y.split("");
  y = y.reverse();
  y = y.join("");
  if (y == x) return true;
  else return false;
};
