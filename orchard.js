///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1] // 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday
const galaAcres = [5, 2, 4, 3, 6, 2, 4] // 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday
const pinkAcres = [1, 5, 4, 2, 1, 5, 4] // 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE
// const fujiAcres = [2, 3, 3, 2, 2, 2, 1] 
// 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday
// array of numbers

for (let i = 0; i < fujiAcres.length; i = i + 1) {
  // Start condition wiht i = 0
  // Stop condition with i < numFive.length Note: Length is last index number + 1.
  // Increments. After each time trhogu the loop, increment i by 1 Note: Or increment by 2, 5, or another number.
    
  console.log(fujiAcres[i]); // Run the code for each element/number in the array each time through the loop throughout... 
    //...the length of the array until you reach the end of the array.
}

//Total Acres
let sum = 0 // The sum starts at 0.
for (let i = 0; i < fujiAcres.length; i = i + 1) {
    // Select each item in the fujiAcres array and add it to the sum variable.
    sum = sum + fujiAcres[i];
    // Loop 1: First sum starts at 0.
    // Loop 2: 0 + 2 = 2
    // Loop 3: 2 + 3 = 5
    // Loop 4: 5 + 3 = 8
    // Loop 5: 8 + 2 = 10
    // Loop 6: 10 + 2 = 12
    // Loop 7: 12 + 2 = 14
    // Loop 8: 14 + 1 = 15
}
console.log(sum) // Sum of is 15.

return sum 

// const fujiAcres = [2, 3, 3, 2, 2, 2, 1] 
// 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday
// array of numbers

// Listing out all the elements in the array for fujiAcres.
for (let i = 0; i < fujiAcres.length; i = i + 1) {
    // Start condition with i = 0
    // Stop condition with i < numFive.length Note: Length is last index number + 1.
    // Increments. After each time trhogu the loop, increment i by 1 Note: Or increment by 2, 5, or another number.
      
    console.log(fujiAcres[i]); // Run the code for each element/number in the array each time through the loop throughout... 
      //...the length of the array until you reach the end of the array.
  }
  
  // Solution 1:
  // Total Acres
  function totalAcress(fujiAcres) {
    let sum = 0; // The sum starts at 0.
    fujiAcres.forEach(item => {
        sum = sum + item;
    });

    console.log(sum);
    return sum;
  }
   

  // Solution 2:
  // Total Acres
  for (let i = 0; i < fujiAcres.length; i = i + 1) {
    // Select each item in the fujiAcres array and add it to the sum variable.
    sum = sum + fujiAcres[i];
    // Loop 1: First sum starts at 0.
    // Loop 2: 0 + 2 = 2
    // Loop 3: 2 + 3 = 5
    // Loop 4: 5 + 3 = 8
    // Loop 5: 8 + 2 = 10
    // Loop 6: 10 + 2 = 12
    // Loop 7: 12 + 2 = 14
    // Loop 8: 14 + 1 = 15
}
return sum {
    
}
console.log(totalAcres([2, 3, 3, 2, 2, 2, 1])) // Sum  is 15.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE
averageDailyAcres = 




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE
acresLeft = 


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];



// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 



// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =




// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
