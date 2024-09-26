// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg
//and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg
//and is 1.76m tall.

const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnsBmi = johnsMass / johnsHeight ** 2;
const markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi);

console.log(markHigherBMI);

//Print a nice output to the console, saying who has the higher BMI.
//The message is either "Mark's BMI is higher than John's!"
//or "John's BMI is higher than Mark's!"
// if (markHigherBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// Comment out the first condiational statement
// improve it to cater for if the mark's bmi and john's bmi are equal

if (marksBmi > johnsBmi) {
  console.log("Mark's BMI is higher than John's!");
} else if (johnsBmi > marksBmi) {
  console.log("John's BMI is higher than Mark's!");
} else {
  console.log("Johns Bmi and Marks BMI is equal");
}

//errors (syntax, reference, type errors )
// boolean > < >= <= == === && || !
// truthy falsy '  ', 0 , null undefined
//  if if else else if

// // let const var
// // let myName = "Ade";
// // myName = "Wale";
// // const myAge = 98;

// // const myAge = 20;
// //
// // const num = 9000;
// // const myBalance = 9000;

// const fullName = "John Doe";
// // string properties
// // length
// fullName.length;
// const firstName = "Peter";
// const lastName = "Pan";
// firstName + lastName;

// // methods
// fullName.toUpperCase();
// fullName.toLowerCase();

// fullName.indexOf("o");
// fullName.lastIndexOf("o");

// fullName.includes("n");
// fullName.startsWith("J");
// fullName.endsWith("ty");

// fullName.replace("o", "9");
// fullName.replaceAll("o", "9");

// fullName.charAt(4);

// const password = "     example    ";
// password.trim();
// password.trimStart();
// password.trimEnd();

// password.concat("another str");

// // slice substring(start, end(not include) ) substr (start, number of xters)
// const myName = "Adewale";
// myName.slice(0, 3); // Ade
// myName.substr(2, 4); // ewal

// //template literals `${varName} `
// const car = "Benz" // Adewale drives a benz
// `${myName.toUpperCase()} drives a ${car}`;

// // numbers  whole integers and decomal

// // number methods toFixed(0)
// // + - / * ** %
// 2 ** 6;
// 7 % 3; // 1
// 7 / 3;
// //

// let likes = 0;
// likes++;
// likes--;

// let savings = 5000;
// savings += 3000;
// savings -= 2000;
// savings *= 2;

// // Booleans
// // > < >= <= == ===
// 8 > 9;
// 8 == "8";
// 8 === "8";

// // && || !

// //  '' ,,

// //

// // const 6name =' ade'
// // console.log(author);

// // a + 89;

// // const a = 90;
// // const myname = 'femi'
// // myName

// // let igSearch = null;

// // console.log("No user found");

// // let twitterSearch;

// // if (7 > 9) {
// //   console.log("hello world");
// // }

// // if (email && password) {
// //   // go and log you in
// // } else {
// //   // please provide email and password
// // }

// //
// // if (myNum > 0) {
// //   //positive
// // } else if (myNum < 0) {
// //   //negative
// // } else if (myNum === 0) {
// //   // zero
// // } else {
// //   //invalid entry
// // }

// // ternary operators

// // let apcVote = 78;
// // let pdpVote = 89;

// // apcVote > pdpVote ? console.log("Apc wins") : console.log("PDP wins");

for (let i = 0; i < 3; i++) {
  //perform action
  if (i === 2) {
    break;
  }
}

// continue and break
// John13 Doe22

// let x = 1;
// while (x < 5) {
//   //perform action
//   if (x === 2) {
//     break;
//   }

//   x++;
// }

//

// There are two gymnastics teams, Dolphins and pandas.
//They compete against eachother 3 times.
//The winner with the highest average score wins a trophy!

//Your task
//1. calculate the average score for each team
// total /num of events

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. pandas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const pandaScore1 = 109;
const pandaScore2 = 95;
const pandaScore3 = 123;

const totalDolphinScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
const totalPandaScore = pandaScore1 + pandaScore2 + pandaScore3;

const avgDolphin = totalDolphinScore / 3;
const avgPanda = totalPandaScore / 3;

console.log(`AVerage dolphin score is ${avgDolphin}`);

console.log(`AVerage panda score is ${avgPanda}`);
// 2. Compare the team's average scores to determine the winner
// of the competition,and print it to the console.
// Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

if (avgDolphin > avgPanda) {
  console.log("Dolphin wins");
} else if (avgDolphin < avgPanda) {
  console.log("Panda Wins");
} else {
  console.log("This is a tie");
}

// Bonus 1: Include a requirement for a minimum score of 100.
// With this rule, a team only wins if it has a higher score than the other team,
//and the same time a score of at least 100 points.
//Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks

if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphin wins");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("Panda Wins");
} else {
  console.log("No team wins");
}

// Bonus 2: Minimum score also applies to a draw!
//So a draw only happens when both teams have the same score
// and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphin wins");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("Panda Wins");
} else if (avgDolphin === avgPanda && avgDolphin >= 100 && avgPanda >= 100) {
  console.log("this is a draw");
} else {
  console.log("No team wins");
}
