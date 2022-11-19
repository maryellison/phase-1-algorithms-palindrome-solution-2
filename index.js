// on optimization:
// this solution is much better on performance and memory because the other
// solution would create new arrays and iterate through them with a bunch of
// js methods. But spliting hairs - both methods will be very good.

function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
  // racecar 7 / 2 == 3.5
  // aaaaaa 6 / 3 == 3
  for (let i = 0; i < word.length / 2; i++) {
//   check each letter to the corresponding letter from the end
    const j = word.length - 1 - i
//    const startChar = word[i]
//    const endChar = word[j]
//   if any of the letters don't match, return false, otherwise return true
//    if (startChar !== endChar) return false;
// code above be refractored without the variables of startChar and endChar
// it can be understood through the code if written out like below
    if (word[i] !== word[j]) return false
    return true;
/* 
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij
*/
  }
}

/* 
  Add your pseudocode here
  the problem:
  abba
  ^  ^
   ^^
   true
  
  robot
  ^   ^
   false 
  make a function that returns true if the word is a palindrome. That means if the
  first letter is the same as the last letter, and the second letter is the same as
  the penultimate letter, etc. until we hit the middle, return true.

  pseudocode:
  iterate from the beginning to the middle
    check each letter to the corresponding letter from the end
        if any of the letters don't match, return false
    return true
*/

/*
  Add written explanation of your solution here
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
