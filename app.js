// //DOM - Document Object Model
// // how to select elements on the page
// // class id, tag, combination

// //get element by the ID
// const text = document.getElementById("text");
// console.log(text);

// // get element by classname

// const message = document.getElementsByClassName("message");
// console.log(message);
// // querySelector, querySelectorAll - use css selctors . #,  div .claa
// const paragraph = document.querySelector("#text");
// console.log(paragraph);
// const paragraphs = document.querySelectorAll(".message");
// console.log(paragraphs);
// //nodeList - array methods can be performed
// // paragraphs.map((paragraph) => {
// //   console.log(paragraph);
// // });

// const heading6 = document.querySelector("div h6");

// // textContent, innerText, innerHTML

// const heading = document.querySelector("h1");
// // console.log(heading.textContent);
// // heading.textContent += "JS IS FUN";
// console.log(heading.innerText);
// heading.innerText += "Js is good";

// const div = document.querySelector("div");
// console.log(div.innerHTML);
// div.innerHTML += "<p>okay</p>";
// const name = "John";
// div.innerHTML = `<h1>Welcome ${name}</h1>`;

// // change attributes

// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";

// //interact with css classnames
// const h1 = document.querySelector("h1");
// h1.className = "success";
// //classList  - add or remove, contains

// const msg = document.querySelector("h2.message");
// // console.log(msg.classList);
// msg.classList.add("error");
// msg.classList.remove("example");
// console.log(msg.classList.contains("good"));

// console.log(msg);

// //create elements
// const section = document.createElement("section");
// section.innerHTML = "<h1>Created from JS</h1>";

// //append it
// const body = document.querySelector("body");
// body.appendChild(section);

// //remove element removeChild
// // body.removeChild(section);

// //replace child
// const link = document.createElement("a");

// link.innerText = "Visit Google";
// // link.href = "https://google.com";
// link.setAttribute("href", "https://google.com");

// body.replaceChild(link, section);

// //responding to users interactions
// // event (click), event handler
// //addEventListener - handle
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("btn clicked");
//   body.style.backgroundColor = "aqua";
// });

//form handling

const form = document.querySelector("form");
// submit
form.addEventListener("submit", (event) => {
  //default of forms when submitted is to refresh the page
  event.preventDefault();

  //selct those inputfields
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");

  const usernameValue = username.value.trim(); //''
  const passwordValue = password.value;
  const small = document.querySelector("small");
  //   console.log(usernameValue, passwordValue);
  // min length for  username is 5
  // validate the password must not include password
  //password1234
  //validate ()
  if (!usernameValue || !passwordValue) {
    //display error message
    small.textContent = "Please fill all fields";
  } else if (usernameValue.length < 5) {
    small.textContent = "Minimum username length is 5";
  } else if (passwordValue.toLowerCase().includes("password")) {
    small.innerText = "Password must not include password";
  } else {
    //submit form
    small.textContent = "Form Submitted";
  }
});
