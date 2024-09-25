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
