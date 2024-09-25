// NUMBER 9 0.4 1198
const myAge = 87;

// number methods toFixed
const num = 10;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));
//  + - * /
const x = 7;
const y = 7;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// ** raised to the power (exponent)
console.log(3 ** 2);
// modulus % (returns the remainder of a division)
console.log(6 % 2);
console.log(100 % 10);

// order of operation (BODMAS)
// PEMDAS
// 4 + 2 * 3 ** 2;

let likes = 0;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes - 1;
likes++;
likes++;
likes++;
likes--;
console.log("Likes ", likes);

// likes++;
// likes--;

let savings = 5000;
// savings = savings + 3000;
savings += 3000;
// savings = savings + 10000;
savings += 10000;
//7000
// savings = savings - 7000;
savings -= 7000;
// 525
// savings = savings - 525;
savings -= 525;
console.log(savings);

savings += 2000;

const fullName = "Peter Pan";
const accountNumber = 56789054;
let myBalance = 4000;
// jan transaction
// credited 10000, debited 200 as sms charges,recieved gift 3000
//,gifted someone 1200
myBalance += 10000;
myBalance -= 200;
myBalance += 3000;
myBalance -= 1200;
console.log("My balance is ", myBalance);
// fullname with acoount number: accountNumber has a balance of myBalance
const accontStatement = `${fullName} with account number ${accountNumber} has a balance of #${myBalance.toFixed(
  2
)}`;
console.log(accontStatement);

// toFixed(3)
// + - * / ** %
// order of operations (bodmas pemdas)
// ++ --
// += -=
