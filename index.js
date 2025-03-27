

function isPalindrome(str) {
  // Write your algorithm here
  let start = 0; // Start pointer
  let end = str.length - 1; // End pointer

  while (start <= end) {
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }

  return true;
}


/* 
  Add your pseudocode here
  function isPalindrome(str):
    Initialize two pointers, one at the start and one at the end of the string
    While start pointer is less than or equal to end pointer:
        If the characters at both pointers do not match:
            Return false
        Move the start pointer forward and the end pointer backward
    Return true (the string is a palindrome)

*/

/*
  Add written explanation of your solution here
  The pseudocode is included as a comment at the top of the code. It outlines the basic logic of the algorithm.
  The function isPalindrome follows the pseudocode to check whether the given string is a palindrome.

*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
