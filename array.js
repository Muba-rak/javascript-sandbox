//ARRAYS - complex data types
// [element1, element2, ]
const mixedArr = [9, "str", true, 65, 9.8, null, [90, false]];

const students = ["Goodness", "Aisha", "Adura"];
console.log(students);

//ARRAY PROPERTIES (length)
console.log(students.length);
// getting element in an array - position arrName[position]
console.log(students[1]);
//change el in an array
students[0] = "John Doe";
console.log(students);

// ARRAY METHODS
// adding and removing els frm an array push pop shift and unshift
//LIFO

students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift();

console.log(students);

// convert arrays to a string (toString, join)
console.log(students.toString());
console.log(students.join("-"));

const onlineStudents = ["John", "Peter", "Paul"];
const weekdayStudents = ["Ade", "Susan", "Joy"];
const allStudents = onlineStudents.concat(weekdayStudents, ["Ruth", "Gift"]);
console.log(allStudents);

// includes
console.log(onlineStudents.includes("Paul"));

// sort, reverse
const carBrands = ["toyota", "lexus", "bmw", "audi", "chevrolet", "Audi"];
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());
// extract portions of an array slice(start, end(not included))
const friends = ["Ola", "Timi", "John", "Jane"];
console.log(friends.slice(0, 2));
console.log(friends.slice(1));

//split
let text = "Hello world is fun";
console.log(text.split(" "));
const text2 = "tadapal";
console.log(text2.split("a"));
console.log(text2.split(""));

// hello olleh ['h', 'e', 'l', 'l', 'o'] - o ll e h
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("hello"));

// push pop unshift shift includes slice sort reverse concat

// higher order array methods (callback functions, iterator methods)

// for of method

const fruits = ["Oranges", "Mangoes", "Pear", "Grapes"];

for (const fruit of fruits) {
  console.log(`${fruit} is somethng I like`);
  if (fruit === "Pear") {
    console.log(`${fruit} is my best fruit`);
  }
}

// find, filter, forEach, map, reduce every some
//FOREACH - executes a function for each element in an array
const customers = ["Pete", "Pan", "Jane", "Dwayne", "Dizzy"];
customers.forEach((customer, index) => {
  console.log(customer, index);
});
const customerOfTheWeek = customers.find((customer) =>
  customer.startsWith("D")
);

//MAP  - creates a new array with transformed element

const nums = [4, 5, 6, 7];

const transformedNums = nums.map((num) => {
  return num * 2;
});
console.log(transformedNums);

//find - returns the first matching element in an array

const mySpecialNum = nums.find((num) => {
  return num >= 5;
});
console.log(mySpecialNum);

//Filter - returns all elements that fits a search condition in an array

const allMyspecialNums = nums.filter((num) => num >= 5);

console.log(allMyspecialNums);

let myBalance = 8000;
const transactions = [4000, -125, 10000, -5000, -2000, 1500];

transactions.map((transaction) => {
  if (transaction > 0) {
    console.log(`You have been credited with ${transaction} Naira `);
  } else {
    console.log(`You have been debited ${transaction} Naira `);
  }
});

transactions.map((transaction) => {
  myBalance += transaction;
});
console.log(myBalance);

const myCreditTransactions = transactions.filter(
  (transaction) => transaction > 0
);
console.log(myCreditTransactions);

const mydebitTransactions = transactions.filter(
  (transaction) => transaction < 0
);
console.log(mydebitTransactions);

const maxTransaction = 50000;
// find if there is any transaction close to that maxTransaction
transactions.push(100000);

const specialTransaction = transactions.find(
  (transaction) => transaction >= maxTransaction
);
console.log(specialTransaction);

// every and some
// every = checks if all elements satisfy a condition
const ages = [20, 42, 61, 81, 11];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
//some = checks if at least one satisfy the condition
const someChildren = ages.some((age) => age < 18);
console.log(someChildren);

// REDUCE - accumulating numbers
const cartPrices = [25000, 32000, 15000, 4000, -2500];
const cartTotal = cartPrices.reduce((prev, curr) => {
  return prev + curr;
}, 300);
console.log(cartTotal);

//sort
const peoplesName = ["Zigi", "Samson", "Niyi", "Ademola"];
// const atoZ = peoplesName.sort();
// console.log(atoZ);
const ztoA = peoplesName.sort((a, b) => b - a);
console.log(ztoA);

const prices = [8000, 67000, 767, 5600, 8000];
// const highesttoLowest = prices.sort((a, b) => b - a);
// console.log(highesttoLowest);

//includes (goodness) , reverse (adura), concat(timi) ,
//slice(theresa), push pop(kassim), unshiftshift(mercy)
// find (Adedayo), filter(aisha), forEach(hussaina) , map (emmanuel),  sort(ezequiel)
//reduce (Rahman) every (Tobi), some(eniola),

//YET TO DISCUSS

//Array.isArray -checks if a varaible is array or not
console.log(Array.isArray([]));
//Array.from - changes a datatype to an array
console.log(Array.from("123"));

//indexof, lastIndexOf
const arr = ["ade", "john", "jane", "ade"];
console.log(arr.indexOf("ade"));
console.log(arr.lastIndexOf("ade"));

//delete -
console.log(arr);
delete arr[1];
console.log(arr);

//findIndex - position of the first element that matches a search condition
const arr2 = [5, 6, 7, 8, 120, 500, 56];
const theIndexIs = arr2.findIndex((num) => num > 100);
console.log(theIndexIs);
