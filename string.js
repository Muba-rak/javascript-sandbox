// DATA TYPES 1. primitive 2. complex object arrays
// primitive strings '' "" , number , boolean, null, undefined

// STRINGS - text characters quotation marks '' ""
const firstName = "John";
const lastName = "Doe";
console.log(firstName);
console.log(lastName);

// String Properties length, concatenation(joining)
//string.length
console.log(firstName.length);
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS - functions that can be performed on strings
//toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// replace, replaceAll
console.log(fullName.replace("o", "*"));
console.log(fullName.replaceAll("o", "*"));
// includes
console.log(fullName.includes("y"));
// startsWith, endsWith
console.log(fullName.startsWith("JO"));
console.log(fullName.endsWith("e"));

const myEmail = "johndoe@google.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexOf, lastIndexOf
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));

//
console.log(myEmail.charAt(5));
// concat
console.log(myEmail.concat("example"));
// trimming

const userName = "      user001      ";
console.log(userName.length);
console.log(userName.trim());
//trimStart trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

//extract portions of a string
//slice, substring, substr (start, num of charaters we want)
// slice(start, end(non-inclusive))
//substr(1, 2)
const surname = "Sandler";
console.log(surname.slice(1));
console.log(surname.substring(1, 6));
console.log(surname.substr(0, 5));

// toUpperCase, toLowerCase, includes, replace, replaceAll
//startsWith, endsWith, indexOf, lastIndexOf, charAt, trim
//trimStart, trimEnd, concat
//slice, substring, substr

const author = "Ngozi Adichie";
const bookTitle = "Americanah";
const yearPublished = "2016";

// The book Americanh written by
//Ngozi adichie was published  in year 2016
const description =
  "The book " +
  bookTitle +
  " written by " +
  author +
  " was published in the year " +
  yearPublished;

console.log(description);

// template literals - allows us to format variables into strings

// backticks `the Book ${bookTitle}`
const description2 = `The book ${bookTitle} written by ${author} was published in the year ${yearPublished} `;
console.log(description2);

const name1 = "Ade";
const name2 = "Wale";
// Ade is a boy
const sentence = `${name1} is a boy`;
// His name is wale
const sentence2 = `His name is ${name2}`;

// 'Tinubu said and i qoute 'let the poor breathe''
const quote = `Tinubu said and I quote "Let the poor breathe"`;
console.log(quote);
