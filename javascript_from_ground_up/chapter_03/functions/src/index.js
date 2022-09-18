import {decrypt, encrypt} from './encrypt-solutions';

/**
 * 1.
 * Make a function to print the first name and last name from an array
 * Input example:  [ ["Jonas", "Rogers"] ]
 * Output example: "Jonas Rogers"
 */

function printFullName(arrayOfNames) {
  // console.log(
  //   'printFullName solution:\n\n',
  //   decrypt({
  //     iv: '17d724e8dbe016b52c72633fda9b7dcd',
  //     content:
  //       '36cad29481409d75278d631ed10e5b9f36191009a28d0c05bc77aa929f4e5df770eb299868cffcc94be72f378a6761',
  //   })
  // );
  // Your code here
}

/**
 * 2.
 * Make a function to print the first name and last name from an array of arrays
 * Input example:  [ ['Julia', 'Robert'], ['John', 'Doe'] ]
 * Output example: ["Julia Robert", "John Doe"]
 */




function printFullNameFromArrayOfArrays(arrayOfArrays) {
  let joinedArray=arrayOfArrays.map(element =>{
    return `${element[0]} ${element[1]}`
  })
  return joinedArray
}

/**
 * 3.
 * Make a function to count character in a string
 * Input example:  "Without functions, we fucked up!"
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function countSpecificCharacter(string, character) {
  let convertedArray=[...string]
  let counter=0
  console.log("Log my new array", convertedArray)
  console.log("This is my charachter", character)
  convertedArray.forEach(char=>{
    if (character === char) counter++
  })
  console.log("I get this as result", counter)
  return counter


}

/**
 * 4.
 * Make a function to return random item from array
 * Input example: ["John", "Doe", 3, "Hello world!"]
 * Output example: Random element from the array.
 */

function getRandomItemFromArray(arr) {
  let randomNumber=Math.floor(Math.random()*5)
  console.log("My array length",arr.length)
  return arr[randomNumber]
}

/**
 * 5.
 * Make a function to return shuffled array items
 * Input example: [1,2,3,4,5,6,7,8,9]
 * Output example: Shuffled array.
 */

function shuffleMyArray(arr) {
  console.log("This I get from my parameter", arr)
  arr.forEach((element,index) => {
    let randomIndex=Math.floor(Math.random()*arr.length)
    arr.splice(arr[index],0,arr[randomIndex])
  })
  return arr
}

/**
 * 6.
 * Reverse a number
 * Input example: 123
 * Output example: 321
 */

function reverseNum(num) {
  return Number( (""+num).split("").reverse().join(""));
  
  
  // console.log("I reversed this to string", typeof convertToString)
  // return convertToString
  // let array = convertToString.split('')
  // console.log('My converted string to array',array)
  // let array1 = array.reverse()
  // console.log('This I get to reverse my array',array1)
  // let myString = array1.join('')
  // console.log('This I get as result',myString)
  //return Number(myString)

}

/**
 * 7.
 * Count vowel letters
 * Input example: The NEMESIS is Umbrella creation
 * Output example: 12
 */

function countVowel(str) {

  let counter = 0
  let convertToArray=str.toLowerCase().split('')
  convertToArray.map(item=>{
  if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') counter++
})
return counter
}

/**
 * 8.
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
  let myConvertedArray=str.split("")
  console.log("After I did split I get this", myConvertedArray)
  let myReversedArray=myConvertedArray.reverse()
  console.log("I should see reversed array",myReversedArray )
 let myResult= myReversedArray.join("")
 return str === myResult
}

/**
 * 9.
 * Factorial
 * Input examples: 5
 * Output examples: 120
 */

function getFactorial(num) {
  if (num ===0 ||num ===1) return 1
  if (num <0) return 0
  let factorial=1
  for (let i=num;i>=1;i--) {
    factorial *=i
  }
  return factorial
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
