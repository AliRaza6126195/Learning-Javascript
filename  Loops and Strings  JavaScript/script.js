// //    LOOPS IN JAVASCROPT
// // Loops are used to execute a piece of code again and again

// //   For Loop Syntax

// for(let i = 1 ; i <= 100 ; i++){
// console.log("HTML HIVE");

// }

// let sum = 0;
// let n = 20
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log( "sum =" , sum);

// for(let i = 1 ; i <= 5 ; i++){
// console.log("i=", i);

// }

// // WHILE LOOP

// // let i = 1
// // while (i<=5) {
// //     console.log( "i =",i);
// //     i++;
// // }

// // DO WHILE LOOP

// let i = 5 ;

// do {
//     console.log("i=",i);
// } while ( i <= 5);

// // //  FOR OF LOOP
// // Used to create loop in strings and Array

// // syntax

// // for (letVal iterator of stringVar) {

// // // }
// // let str = "JAVASCRIPT";

// // for (let i  of str) {

// //     console.log("i=",i);
// // }

// let str = "JAVASCRIPT";
// let size = 0;

// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }

// console.log("String  size = ", size);

// FOR-IN LOOP
// FOR-IN LOOP is used to create LOOP in Object and Array
// syntax

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

// let student = {
//   name: "Ali Raza",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key= ", key, " value=", student[key]);
// }

// PRACTICE QUESTONS USING LOOP IN JAVASCRIPT

// // PRACTICE QUESTION 1
// PRINT ALL EVEN NUMBERS BETWEEN 0 AND 100

// for (let i =  0;  i <= 100; i++) {

//     if (i<=100 && i%2===0) {
//         console.log("i=",i);

//     }

// }

// PRINT ALL ODD NUMBERS BETWEEN 0 AND 100
// for (let i = 0; i <= 100; i++) {
//   if (i <= 100 && i % 2 !== 0) {
//     console.log("i=", i);
//   }
// }

// PRACTICE QUESTION 2

// CREATE A GAME WHERE YOU START WITH ANY RANDOM NUMBER . ASK THE USER TO GUESS THE RIGHT NUMBER UNTIL HE GUSSE THE RIGHT ONE

// let gameNum = 25;

// let userNum = prompt("Guess the Game Number :");

// while (userNum != gameNum) {
// userNum =  prompt("You enter wrong number , Guess Again");
// }
// console.log("Congrats You Enter right Number");

  
