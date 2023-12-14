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

// for (let i = 0; i < fujiAcres.length; i = i + 1) {
  // Start condition with i = 0
  // Stop condition with i < numFive.length Note: Length is last index number + 1.
  // Increments. After each time trhogu the loop, increment i by 1 Note: Or increment by 2, 5, or another number.
    
  // console.log(fujiAcres[i]); // Run the code for each element/number in the array each time through the loop throughout... 
    //...the length of the array until you reach the end of the array.
// }
// console.log(fujiAcres[i]); // Run the code for each element/number in the array each time through the loop throughout... 
    //...the length of the array until you reach the end of the array.

let sum = 0 // The sum starts at 0. Before the for loop
for (let i = 0; i < fujiAcres.length; i = i + 1) { // i += 1  // or i++
    // Select each item in the fujiAcres array and add it to the sum variable.
    // Start condition with i = 0
    // Stop condition with i < numFive.length Note: Length is last index number + 1.
    // Increments. After each time trhogu the loop, increment i by 1 Note: Or increment by 2, 5, or another number.
    
    sum = sum + fujiAcres[i];
    // Outside of the for loop. First sum starts at 0.
    // Loop 0: 0 + 2 = 2
    // Loop 1: 2 + 3 = 5
    // Loop 2: 5 + 3 = 8
    // Loop 3: 8 + 2 = 10
    // Loop 4: 10 + 2 = 12
    // Loop 5: 12 + 2 = 14
    // Loop 6: 14 + 1 = 15
    console.log(sum) // Sum for each loop incrementally. 
    // console.logs inside the fn will show what the fn does step by step.
    }
    console.log(sum) // Sum of is 15.
    // Run the code for each element/number in the array each time through the loop throughout... 
      //...the length of the array until you reach the end of the array.

// Do the same for loop for the other two arrays.
// galaAcres
// const galaAcres = [5, 2, 4, 3, 6, 2, 4] // 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday
let sum2 = 0 // The sum starts at 0. Before the for loop
for (let i = 0; i < galaAcres.length; i = i + 1) {
    // Select each item in the galaAcres array and add it to the sum variable.
    
    sum2 = sum2 + galaAcres[i];
    console.log(sum2) // Sum for each loop incrementally. 
    }
    console.log(sum2) // Sum of is 26.

// Do the same for loop for the last array.
// pinkAcres
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4] // 0-Monday, 1-Tuesday, 2-Wednesday, 3-Thursday, 4-Friday, 5-Saturday, 6-Sunday
let sum3 = 0 // The sum starts at 0. Before the for loop
for (let i = 0; i < pinkAcres.length; i = i + 1) {
    // Select each item in the galaAcres array and add it to the sum variable.
    
    sum3 = sum3 + pinkAcres[i];
    console.log(sum3) // Sum for each loop incrementally. 
    }
    console.log(sum3) // Sum of is 22.


//Total Acres: Solution 1
// No for loop needed to sum up all the sum variables.
let totalAcres = sum + sum2 + sum3
console.log(totalAcres) // Sum of is 63.

//Total Acres: Solution 2
// Summing all the acres at once.
let totalAcres2 = 0 // The sum starts at 0. Before the for loop
for (let i = 0; i < fujiAcres.length; i = i + 1) {
    // Select each item in the fujiAcres array and add it to the sum variable.
    
    totalAcres2 = totalAcres2 + fujiAcres[i];
    totalAcres2 = totalAcres2 + galaAcres[i];
    totalAcres2 = totalAcres2 + pinkAcres[i];
    // Summed up each day in all 3 arrays simoultaneously, then summed up the totals and put out a total sum for all.
    // Moved across the array column by column.
    console.log(totalAcres2) // Sum of is 63.
    }
    console.log(totalAcres2) // Sum of is 63.

// Not needed - return sum 
    // You would return a value to a variable.

//Total Acres: Solution 3
// Summing all the acres at once.
// let 
    
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
  

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE
// recode later - averageDailyAcres = 
// Other option
// let averageDailyAcres = sum4 / 7;
let averageDailyAcres = totalAcres2 / fujiAcres.length; // i'm just doing an operation for division here.
    console.log("averageDailyAcres = " + averageDailyAcres);
    console.log(`averageDailyAcres = ${averageDailyAcres} Acres`); // String + JS (i.e template literal)


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
// Make a "While Loop", and subtracted 9 Acres per day from the days to see how long it will take us 
    // to pick the whole 174 acres leftover.
// Subtract 9 acres a day from the 174 acres leftover and add a day each time to see 
    // how many days it'll take to pick all 174 acres.

// CODE HERE
// recode later - acresLeft = 

while (acresLeft > 0) {  // While the 174 acresLeft are less that 0, set it to this 
    // because the acres will eventually be less than 0.
    // acresLeft = acresLeft - averageDailyAcres; // This is a basic subtraction operation.
    acresLeft -= averageDailyAcres; // short-hand version of the code above
    // days = days + 1;  // or this way - days += 1 // The days are being counting in increments of 1.
    // days += 1; // short-hand way of the code above
    days ++; // sohrt-hand
    console.log(`acresLeft = ${acresLeft} , day ${days}`); // orange font is palin English // ligth blue is JS code
}

    console.log(days); // just shows the number of days - 20
    console.log(`${days} days`); // shows the number of days and the word "days"
    // Concatenates/adds the JS code (with a template literal/string) for days in output with the word "days" 
    console.log(`It took ${days} days to pick the 174 letfover apples at ${averageDailyAcres} apples per day.`);
    // Concatenates/adds the JS code (with a template literal/string) with a full sentence for the days it took 
    // in output with the word "days" to pick the leftover 174 acres.


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
let tons = 0 // The sum starts at 0. Before the for loop
for (let i = 0; i < fujiAcres.length; i = i + 1) {
    // Select each item in the galaAcres array and multiply by a number to get the sum tons variable.
    
    // Push/add the amount in tons as a product to the new Tons Array for each corresponding day.
    fujiTons.push(fujiAcres[i] * 6.5);
    console.log(fujiTons);
    // Pull out the fujiAcres Array
    // Multiply each day/index by 6.5
    // Then add it to the fujiTons Array
    // Order of operations: start from inside from out, not from left to right.

    tons = tons + fujiAcres[i] * 6.5;
    // Outside of the for loop. First sum starts at 0.
    }
    console.log(tons) // Sum of is 97.5.

let galaTons = []; // rinse and repeat for galaArray
let tons2 = 0
for (let i = 0; i < galaAcres.length; i = i + 1) {
    galaTons.push(galaAcres[i] * 6.5);
    console.log(galaTons);

    tons2 = tons2 + galaAcres[i] * 6.5;
}
    console.log(tons2); // Sum of is 169.

let pinkTons = []; // rinse and repeat for pinkArray
let tons3 = 0
for (let i = 0; i < pinkAcres.length; i = i + 1) {
    pinkTons.push(pinkAcres[i] * 6.5);
    console.log(pinkTons);

    tons3 = tons3 + pinkAcres[i] * 6.5;
}
    console.log(tons3); // Sum of is 143.


// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = tons * 2000;
console.log(fujiPounds); // Pounds are 195,000.
console.log(`The total number of fujiPounds picked is ${fujiPounds} pounds.`); // Pounds are 195,000.
console.log(`fujiPounds: ${fujiPounds}.`); // Pounds are 195,000.


let galaPounds = tons2 * 2000; // rinse and repeat
console.log(galaPounds); // Pounds are 338,000.
console.log(`The total number of galaPounds picked is ${galaPounds} pounds.`); // Pounds are 338,000.
console.log(`galaPounds: ${galaPounds}.`); // Pounds are 338,000.


let pinkPounds = tons3 * 2000; // rinse and repeat
console.log(pinkPounds); // Pounds are 286,000.
console.log(`The total number of pinkPounds picked is ${pinkPounds} pounds.`); // Pounds are 286,000.
console.log(`pinkPounds: ${pinkPounds}.`); // Pounds are 286,000.



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

let fujiProfit = fujiPrice * fujiPounds; // Multiply the price by the pounds to ge the total price.
console.log(fujiProfit); // Total price is $173,550.00
console.log(`The total price per pound of fuji apples is $ ${fujiProfit}.`); // Total price is $173,550.00

let galaProfit = galaPrice * galaPounds; // Multiply the price by the pounds to ge the total price.
console.log(galaProfit); // Total price is $216,320.00
console.log(`The total price per pound of gala apples is $ ${galaProfit}.`); // Total price is $216,320.00

let pinkProfit = pinkPrice * pinkPounds; // Multiply the price by the pounds to ge the total price.
console.log(pinkProfit); // Total price is $157,300.00
console.log(`The total price per pound of pink apples is $ ${pinkProfit}.`); // Total price is $157,300.00


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);
console.log(`Total profit is $ ${totalProfit}.`);


// CODE HERE
