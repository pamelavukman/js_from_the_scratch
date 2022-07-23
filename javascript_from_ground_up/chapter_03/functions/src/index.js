/**
 * 1.
 * Make a function to print the first name and last name from an array
 * Input example:  [ ["Jonas", "Rogers"] ]
 * Output example: "Jonas Rogers"
 */

function printFullName(arrayOfNames) {
  // Your code here
}

/**
 * 2.
 * Make a function to print the first name and last name from an array of arrays
 * Input example:  [ ["Jonas", "Rogers"], ["John", "Doe"], ... ]
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function printFullNameFromArrayOfArrays(arrayOfArrays) {
  // Your code here
}

/**
 * 3.
 * Make a function to count character in a string
 * Input example:  "Without functions, we fucked up!"
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function countSpecificCharacter(string, character) {
  // Your code here
}

/**
 * 4.
 * Make a function to return random item from array
 * Input example: ["John", "Doe", 3, "Hello world!"]
 * Output example: Random element from the array.
 */

function getRandomItemFromArray(arr) {
  // Your code here
}

/**
 * 5.
 * Make a function to return shuffled array items
 * Input example: [1,2,3,4,5,6,7,8,9]
 * Output example: Shuffled array.
 */

function shuffleMyArray(arr) {
  // Your code here
}

/**
 * 6.
 * Reverse a number
 * Input example: 123
 * Output example: 321
 */

function reverseNum(num) {
  return +num.toString().split('').reverse().join('');
}

/**
 * 6.
 * Count vowel letters
 * Input example: The NEMESIS is Umbrella creation
 * Output example: 321
 */

function countVowel(str) {
  // One line solution
  // return (str.match(/[aeiou]/gi) || []).length

  // Multi line solution
  var count = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == 'a' ||
      str.charAt(i) == 'e' ||
      str.charAt(i) == 'i' ||
      str.charAt(i) == 'o' ||
      str.charAt(i) == 'u'
    ) {
      count++; //Increment vowel count
    }
  }
  return count;
}

/**
 * 7.
 * Check Palindrome
 * Input examples:
 * - bannana
 * - racecar
 * - madam
 * Output examples:
 * - false
 * - true
 * - true
 */

function checkPalindrome(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) != str.charAt(str.length - i - 1)) {
      // Comparison fail
      return false;
    }
  }
  return true;
}

/**
 * 8.
 * Factorial
 * Input examples: 5
 * Output examples: 120
 */

function getFactorial(num) {
  if (num === 1) return 1;
  if (num === 0 || num < 0) return 0;

  return num * getFactorial(num - 1);
}

// Do not touch this line
module.exports = {
  printFullName,
  printFullNameFromArrayOfArrays,
  countSpecificCharacter,
  getRandomItemFromArray,
  shuffleMyArray,
  reverseNum,
  countVowel,
  checkPalindrome,
  getFactorial,
};
