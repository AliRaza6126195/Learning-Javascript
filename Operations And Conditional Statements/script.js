// Conditional Statements

// let num = 13;

// if (num % 2 === 0) {
//   console.log( num , 'Is Even');
// } else {
//   console.log( num ,'Is Odd');
// }

// let mode = "Red";
// let color;

// if (mode === "Dark") {
//   color = "Black";
// } else if (mode === "Green") {
//   color = "Green";
// } else if (mode === "Blue") {
//   color = "Blue";
// } else if (mode === "Purpal") {
//   color = "Purpal";
// } else {
//   color = "White";
// }

// console.log(color);

// // Ternary Operators

// let age = 10;

// let result = age >= 18 ? "Adult" : "Not Adult";
// console.log(result);

// How prompt works

// let name = prompt("Hey Developers")
// console.log(name);

// Practice question using promt and if else statements

// Question 1

// let num = prompt("ENter a Number");

// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, " is not multiple of 5");
// }

// Question 2

let marks = prompt("Enter Your Marks (0-100):");
let grade ;

if (marks >= 90 && marks <= 100) {
 grade = "A" ;
} else if (marks >= 70 && marks <= 89) {
    grade = "B" ;
} else if (marks >= 60 && marks <= 69) {
    grade = "C" ;
} else if (marks >= 50 && marks <= 59) {
    grade = "D" ;  
}else if (  marks >= 0 && marks <= 49){
    grade = "F" ;
}

console.log("Grade",grade); 