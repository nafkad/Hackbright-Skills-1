//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
// const faveColors = ["red", "green", "black"];
// console.log(faveColors); // print out all three items/colors in the array

let colorCopy = faveColors.slice();
console.log(colorCopy);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
// const faveColors = ["red", "green", "black"];
faveColors.push("yellow"); // adding/pushing a the color "yellow" to the back of the array
console.log(faveColors); // ["red", "green", "black", "yellow"]

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
// const numbers = [1, 2, 3, 4, 5]
// const numbersSubset = numbers.splice(1, 2, 3); // .slice() with a start and end index returns a subarray
// console.log(numbersSubset); // [2, 3, 4]  - Note: only shows elements 2 and 3 for indeces 1, 2, and 3. Not sure why.
 const middleNums = numbers.slice(1, numbers.length-1);
 console.log(middleNums);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
// const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
const answers = []
for (let i = 0; i < bigOrSmallArray.length; i = i + 1) {
  if (bigOrSmallArray[i] > 100) {
    answers.push("big");
  }
  else {
    answers.push("small");
  }
}; 
console.log(answers);