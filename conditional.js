//CONDITIONAL STATEMENT
// control

const myBalance = 3000;
const transaction = 3000;

// if statement
// if(condition) {
//lines of code
//}
// if (false) {
//   console.log("Yes");
// }

if (myBalance >= transaction) {
  console.log("Transaction successful");
}

// 18+
const age = 12;
if (age >= 18) {
  console.log("You are eligible to vote");
}

// if the length of the password is 7 and above has @ - good password
const password = "e67e6dgdg@";

if (password.length >= 7 && password.includes("@")) {
  console.log("Good Password");
}

// if else statement

// if(condition){
//first action
//}else{
//second action
//}

const age2 = 25;
// eligibke  18+ or not

if (age2 >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are ineligible to vote, you must be 18+");
}

// youth/underage 0-40  or aged 41
const age3 = 40;
if (age3 >= 0 && age3 <= 40) {
  console.log("You are in the youth/underage category");
} else {
  console.log("You are in the aged category");
}

// write an if else statement t vvo check if a
//numbr is even or odd and log to the console
//  %

const num = 90;
if (num % 2 === 0) {
  console.log("This is an even number");
} else {
  console.log("This is an odd number");
}

// declare two variables 1. savings 2. transactionAmount
// write an if else statement to check if transaction will be successful
// or not
//

const savings = 2000;
const transactionAmount = 8000;
if (savings >= transactionAmount) {
  console.log("Transaction successful");
} else {
  console.log("Insuffienct Funds");
}

// multiple conditions else if statment

// positive > 0 negative < 0 and zero
let myNum = 0;

if (myNum > 0) {
  console.log("This is a Positive nUmber");
} else if (myNum < 0) {
  console.log("This is a Negative Number");
} else {
  console.log("THis is Zero");
}

// underage 0 - 12 teens 13- 19 adults 20  aged 41
const age4 = -89;

if (age4 >= 0 && age4 <= 12) {
  console.log("underage");
} else if (age4 >= 13 && age4 <= 19) {
  console.log("Teens");
} else if (age4 >= 20 && age4 <= 40) {
  console.log("Adult");
} else if (age4 >= 41) {
  console.log("Aged");
} else {
  console.log("Invalid age, try again");
}

// Switch statement
// a - excellent , b- very good

const grade = "b";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Fair");
    break;
  case "E":
    console.log("Poor");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
    console.log("Invalid Grade");
}
