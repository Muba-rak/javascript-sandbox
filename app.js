//ASYNCHRONOUS JS

//synchronous /blocking
console.log("a"); //
console.log("b"); //download a file of 2gb // 30mins
console.log("c"); // send an email

//nonblocking

console.log(1);

setTimeout(() => {
  console.log(2);
}, 5000);

console.log(3);

// fetching data

//API  - application programming interface
