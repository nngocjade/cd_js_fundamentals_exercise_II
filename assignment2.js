// Assignment 2 - Nested For Loop
// Docs

// A composition of loops is called a nested loop.
// The most common type of nested loops will be one loop inside another.
// The first loop is usually called the outer loop, while the second loop is called the inner loop. The outer loop always executes first.
// The inner loop executes inside the outer loop each time the outer loop executes once.
// Take a look at the example below and visualize how the nested loop works.

for (var i = 0; i < 10; i++) {
  var s = "";
  for (var j = 0; j < 10; j++) {
    s = s + i + j + " ";
  }
  console.log(s);
}

// for (var i = 0; i < 10; i++) {
//   var s = "";
//   for (var j = 2; j < 4; j++) {
//     // s = s + i + j + " ";
//     console.log("i:", i, " j:", j);

//     // console.log("s: ", s);
//   }
//   console.log(s);
// }

// Write a function that takes a number n as an argument and print out the following:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// ...
// n n n n ... n
// For example, given n = 3, your function should print out:

for (var i = 0; i < 10000; i++) {
  var s = "";
  s = i + "";
}
console.log(s);

// let str = "";
// for (i = 0; i < 3; i++) {
//   for (n = 1; (n = 3); n++) {
//     console.log((str += n));
//   }
// }

let str = "";
for (i = 1; i <= 3; i++) {
  let s = "";
  for (j = 1; j <= i; j++) {
    s = s + i + "";
  }
  console.log(s);
}
