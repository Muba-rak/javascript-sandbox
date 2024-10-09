//
// rest and spread operator ...
// rest operator
const countries = ["Cuba", "Algeria", "Mexico", "USA"];
const [one, ...others] = countries;

console.log(one);
console.log(others);

const country = {
  name: "Nigeria",
  yearOfIndependence: 1960,
  officialLanguage: "English",
  isIsland: false,
};
const { name, isIsland, ...remaining } = country;
console.log(remaining);

//spread operator ...
const africanCountries = ["Mali", "Togo", "Kenya", "Uganda"];
const asianCountries = ["China", "Japan", "Bangladesh", "Vietnam"];

const allCountries = [
  "Uk",
  ...africanCountries,
  "Congo",
  ...asianCountries,
  "Austria",
  "France",
];

// console.log(allCountries);

// optional chaining
const user = {
  name: "John Doe",
  age: 45,
  gender: "Male",
  previousJobs: {
    one: "Jumia",
    two: "Paystack",
    three: "Meta",
  },
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// if (user.profilePic) {
//display picture
// <img src= {}
// }
// img src= {user?.profilePic}

// nullish coalescence
// leftExpression (null || undefined) ?? defautValue
const username = null;

console.log(username ?? "Unknown User");
