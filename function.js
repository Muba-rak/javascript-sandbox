// Functions
// function declaration
myFunction1();
function greeting() {
  console.log("Welcome to our App");
}
//invoked / called
greeting();
greeting();

function speak() {
  console.log("Hello class");
}
speak();

// functions can take parameters
function specialGreeting(name = "user") {
  console.log(`${name}, welcome to our app`);
}
specialGreeting("Timi");
specialGreeting("Goodness");

// default parameters
specialGreeting();

// write a function that logs the addition of three numbers
function addTwoNums(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log(result);
}
addTwoNums(9, 5, 7);
addTwoNums(-10, 7, 3);

// checks if a number is either positive negative or zero

function checkNum(num) {
  if (num > 0) {
    return `${num} is Positive`;
  } else if (num < 0) {
    console.log(`${num} is Negative`);
  } else {
    console.log("This is Zero");
  }
}

checkNum(89);
checkNum(-54);
checkNum(0);

// Function expression

function myFunction1() {
  console.log("This is a func declaration");
}

const myFunction2 = function (parameter1, parameter2) {
  console.log("This is a func expression");
};
myFunction2();

//hoisting - moves all f the func declaration up the script

//return key word

// write a function that calculates the product of two nums

const productOfTwoNums = function (num1, num2) {
  return num1 * num2;
};

const result = productOfTwoNums(9, 2);
console.log(`The result is ${result}`);

// write a function that converts km to meter
// 7km - 7 * 1000

const kmToMeters = function (value) {
  const meter = value * 1000;
  return `${value}km is equal to ${meter}m`;
  //inaccessible code
};

console.log(kmToMeters(6));
console.log(kmToMeters(4.5));

//write a function that calculates the average of three numbers
//and returns the average

const calcAverage = function (n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;
  return average;
};

console.log(calcAverage(9, 7, 6));

// write a func that calculates the age of user, yoyr function
//should take in year of birth as a parameter

const usersAge = function (yearOfBirth) {
  return 2024 - yearOfBirth;
};
console.log(usersAge(1960));

// write a function that checks if a number is even or odd

const oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "This is an even Number";
  } else {
    return "This is an odd number";
  }
};

console.log(oddOrEven(62));

let savings = 8900;

const checkWithdrawal = function (amount) {
  if (amount < savings) {
    savings -= amount;
    return `withdrawal of ${amount} is successful and my balance is ${savings}`;
  } else {
    return `Insufficient funds`;
  }
};

// console.log(checkWithdrawal(70000));
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));

// console.log(`my current saving is ${savings}`);
const depositAmount = function (amount) {
  savings += amount;
  return `Deposit of ${amount} is successful and your current balance is ${savings}`;
};
console.log(depositAmount(900));
console.log(checkWithdrawal(1200));
console.log(depositAmount(5000));

// build a simple atm machine
let usersPin = 1234;

// write a function that checks the enteredPin

const checkPin = function (enteredPin) {
  if (enteredPin === usersPin) {
    return true;
  } else {
    return false;
  }
};

const withdraw = function (amount) {
  if (checkPin(1234)) {
    //withdraw
    if (savings > amount) {
      savings -= amount;
      console.log(
        `The withdrawal of ${amount} is successful and balance is ${savings}`
      );
    } else {
      console.log("Insufficient funds");
    }
  } else {
    console.log("Incorrect pin, try again");
  }
};

withdraw(2000);
withdraw(5000);

const deposit = function (amount) {
  if (checkPin(1234)) {
    savings += amount;
    console.log(
      `The deposit of ${amount} is successful and balance is ${savings}`
    );
  } else {
    console.log("Incorrect pin, try again");
  }
};
deposit(6000);
deposit(9000);

// write a function that checks balance
const balance = function () {
  if (checkPin(1234)) {
    //show balance
    console.log(`Your Current Balance is ${savings}`);
  } else {
    console.log("Incorrect pin, try again");
  }
};
balance();

// write a function that checks number of attempt on the pin,
//max attempt is 3 , card should be blocked
let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (blocked) {
    console.log("Your Card is Blocked");
    return;
  }
  if (checkPin(7890)) {
    console.log("Perform Transaction");
    attempt = 0;
  } else {
    attempt++;
    if (attempt === 3) {
      console.log("Your Card is Blocked");
      blocked = true;
    } else {
      console.log(`Incorrect Pin, ${3 - attempt} attempts left`);
    }
  }
};
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();

// write a func that check if an email is valid or not
// @
// test@
const emailCheck = function (value) {
  if (value.includes("@")) {
    console.log("Email is Valid");
  } else {
    console.log("Invalid email");
  }
};

//arrow function

const myFunction = (p1, p2) => {};

// write an arrow function to check if password is long enough
//(min password length 7)

const passwordCheck = (value) => {
  //not advisable to tamper with password
  if (value.trim().length >= 7) {
    console.log("Password is long enough");
  } else {
    console.log("Short password");
  }
};
const passwordCheck2 = (value) =>
  value.length >= 7 ? "Password is long enough" : "Short Password";

passwordCheck("password");
console.log(passwordCheck2("password"));

// return keyword
//
// const calcAverage = (num1, num2) => {
//   return (num1 + num2) / 2;
// };

const calcAverage = (num1, num2) => (num1 + num2) / 2;

console.log(calcAverage(8, 5));

const kmToMetersAgain = (value) => `${value} Km is equal to ${value * 1000} m`;

console.log(kmToMetersAgain(8.5));

//SCOPING Global local

const globalVar = "EXAMPLE";
const num5 = 90;

const example = () => {
  console.log(globalVar);

  const myValue = 90;
  console.log(myValue);
};

const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
};

seeBalance();
console.log(mySavings);
const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
};

const func2 = (num = 78) => {
  // const num = 12;
  console.log(num);
};
func2();
console.log(num);

// write a function that takes in a string as a parameter
// and returns the string in all capital letter
const capitalizeStr = (str) => str.toUpperCase();
console.log(capitalizeStr("hgsgs"));

// Write a JavaScript function that accepts a string as a parameter
//and converts the first letter of the word to uppercase
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase();

console.log(capitalizeFirstLetter("tjhtnyvalue"));

//Write a JavaScript function that accepts an argument and returns the datatype.
const checkDataType = (arg) => typeof arg;
console.log(checkDataType(90));

// write a function that returns whether a number is even or odd

//Write a function named minutesToHours that receives a number of minutes as parameter
// and returns a number representing the same amount of time but in hours.
const minutesToHours = (minute) => minute / 60;

// write a function called longestString that receives two strings as parameters
// and returns the longest of the two strings
const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);

// Write a function named concat3 that receives 3 strings as parameters
// (string1, string2, string3) and an additional string named separator.
// The function should concatenate the three strings
// using the provided separator and return the result.

//test hello world again -
//expected result hello-world-agaim
const concat3 = (str1, str2, str3, seperator) =>
  str1 + seperator + str2 + seperator + str3;
console.log(concat3("Ade", "Wale", "Ola", "#"));

// write a function that returns the square of a number
const squareNumber = (num) => num ** 2;

// write a function called checkLoanEligibility,
//which recieves an amount as a parameter and returns
//whether a user is eligible or not based on the criterion
// the loan amount can not be more than twice the amount of savings

let savings = 60000;
// 45000 , 200000, 70000
const checkLoanEligibility = (loanAmount) =>
  loanAmount > savings * 2 ? "Ineligible" : "Eligible";

// functions
// func declaration
//func expression
// return keyword
// arrow function
//scoping

// write a function logs hello world to the console
const logger = () => console.log("hello world");
logger();

// write a function that returns 34
const loggerNum = () => 34;

// write a function that returns the number of vowels in a string

const countNumOfVowels = (str) => {
  let vowels = "aeiou";
  let numOfVowels = 0;
  const lowerCaseStr = str.toLowerCase();
  // loop over the lowerCaseStr
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowels.includes(lowerCaseStr.charAt(i))) {
      numOfVowels++;
    }
  }
  return numOfVowels;
};
//ACCoun
console.log(countNumOfVowels("tea"));
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

getFullName("John", "Doe"); //John Doe

const getMax = (n1, n2) => (n1 > n2 ? n1 : n2);
getMax(98, 67);

const minutesToSeconds = (mins) => mins * 60;

const containSubstring = (str, substr) => str.includes(substr);
containSubstring("Hello", "el");
containSubstring("world", "dl");
