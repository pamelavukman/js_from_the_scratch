/**
 * 1.
 * Make a function to print the first name and last name from an array
 * Input example:  [ ["Jonas", "Rogers"] ]
 * Output example: "Jonas Rogers"
 */

function printFullName(arrayOfNames) {
  // Your code here
}

let names = ['Jonas', 'Rogers'];
console.log('==>> 1. Your full name is: ', printFullName(names));

/**
 * 2.
 * Make a function to print the first name and last name from an array of arrays
 * Input example:  [ ["Jonas", "Rogers"], ["John", "Doe"], ... ]
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function printFullNameFromArrayOfArrays(arrayOfArrays) {
  // Your code here
}

let peopleNames = [
  ['Jonas', 'Rogers'],
  ['Mel', 'Gibson'],
  ['Lucy', 'Liu'],
  ['Edward', 'Scissorhands'],
];
console.log(
  '==>> 2. Your full names are: ',
  printFullNameFromArrayOfArrays(peopleNames)
);

/**
 * 3.
 * Make a function to count character in a string
 * Input example:  "Without functions, we fucked up!"
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function countSpecificCharacter(string, character) {
  // Your code here
}
console.log(
  '==>> 3. count of `u` character in `Without functions, we fucked up!`  is: ',
  countSpecificCharacter('Without functions, we fucked up!', 'u')
);

/**
 * 4.
 * Make a function to return random item from array
 * Input example: ["John", "Doe", 3, "Hello world!"]
 * Output example: Random element from the array.
 */

function getRandomItemFromArray(arr) {
  // Your code here
}
console.log(
  '==>> 4. Return random item is: ',
  getRandomItemFromArray(['John', 'Doe', 3, 'Hello world!'])
);

/**
 * 5.
 * Make a function to return shuffled array items
 * Input example: [1,2,3,4,5,6,7,8,9]
 * Output example: Shuffled array.
 */

function shuffleMyArray(arr) {
  // Your code here
}
console.log(
  '==>> 5. Return shuffled items: ',
  shuffleMyArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
);

// Do not touch this line
module.exports = {
  printFullName,
  printFullNameFromArrayOfArrays,
  countSpecificCharacter,
  getRandomItemFromArray,
  shuffleMyArray,
};
