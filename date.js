// DATE OBJECT

// Date

const date = new Date();
console.log(date);

// conversion
console.log(date.toString());
console.log(date.toDateString()); //returns date
console.log(date.toTimeString()); // returns time
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

//Get methods

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
