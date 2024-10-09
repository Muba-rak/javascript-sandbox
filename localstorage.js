//Local Storage

// set sth inth localstorage
// localStorage.setItem("token", "hello");

// // getting sth from the localstorage
// localStorage.getItem("token");

// remove values in the localstorage
// localStorage.removeItem("token");

//clear our local storage

// localStorage.clear();

// localstorage can only take in strings

const user = {
  id: 1,
  theme: "dark",
};

//JSON.stringify
// Javascript object notation
localStorage.setItem("user", JSON.stringify(user));
//JSON.parse
JSON.parse(localStorage.getItem("user"));
