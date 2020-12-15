// Assignment 1 - Generate random integer number
// Docs

// In JavaScript, to get a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1), use the Math.random() function.

// console.log(Math.random()); // example: 0.5408145050563944
// In JavaScript, we use Math.floor() to round down to a whole number, Math.ceil() to round up, and Math.round() to round to the nearest whole number.

// console.log(Math.floor(4.5)); // expected output: 4
// console.log(Math.ceil(4.5)); // expected output: 5
// console.log(Math.round(4.5)); // expected output: 5
// console.log(Math.round(4.49)); // expected output: 4
// Assignment

// Write a loop that logs 5 random numbers between 0 and 1 to the console.
// Write a function named getRandomInt() that return a random integer number from 0 (inclusive) to 10 (exclusive). Put it in a loop that runs 100 times to check whether you see all of the numbers from 0 to 9?
// Improve the function so that it return a random integer number between start (inclusive) to end (inclusive)
// // From 5 (inclusive) to 8 (inclusive)
// console.log(getRandomInt(5, 8)); // example output: 5 or 6 or 7 or 8
// Use the function getRandomInt() to make another function called getRandomItem() that takes an array as an argument and returns a random element in the array. Example
// var arr = ["apple", "orange", "kiwi"];

// console.log(getRandomItem(arr)); // example: orange
// Hint: arr.length returns the number of elements in an array.

console.log("Doc");
console.log(Math.random());
console.log(Math.floor(4.5)); // expected output: 4
console.log(Math.ceil(4.5)); // expected output: 5
console.log(Math.round(4.5)); // expected output: 5
console.log(Math.round(4.49)); // expected output: 4

console.log("Assignment 1");

let i;
for (i = 0; i < 5; i++) {
  console.log(Math.random());
}

function getRandomInt(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

for (i = 0; i < 100; i++) {
  // console.log(getRandomInt(3, 7));
}
//----------------------------------------
var fruits = ["apple", "orange", "kiwi"];

function getRandomItem(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

//

for (let i = 0; i < 3; i++) {
  console.log(fruits[i]);
}
