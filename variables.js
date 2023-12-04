//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
const myName = "Adenike";
console.log(myName)


//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
const faveNum = 100;
console.log(faveNum);

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
const lovesCode = true;
if (lovesCode) {
  console.log("smile"); // If true, then smile.
} else {
  console.log("frown"); // If false, then frown.
}
console.log(true); // True - prints "smile"
console.log(false); // False - should print "frown" 
// Note: It should run the code and show "frown" in the terminal. Not sure why it doesn't and only shows "false".

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
const faveNums = true
if (faveNums === 13) {
  console.log("lucky 13!"); // If true, then "lucky 13!"
} else {
  console.log("not lucky 13"); // If false, then "not lucky 13"
}
console.log(faveNums); // True - should print "lucky 13!" Note: Not sure why it's not printing the corresponding response/outcome.


//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out the numbers from 1 through 5.
*/

//CODE HERE
const numFive = [1, 2, 3, 4, 5]; // array of numbers
for (let i = 0; i < numFive.length; i = i + 1) {
  // Start condition wiht i = 0
  // Stop condition with i < numFive.length Note: Length is last index number + 1.
  // Increments. After each time trhogu the loop, increment i by 1 Note: Or increment by 2, 5, or another number.
    
  console.log(numFive[i]); // Run the code for each element/number in the array each time through the loop throughout... 
    //...the length of the array until you reach the end of the array.
}