alert("Welcome to JS with Deepu Bhai!");

// *** Aarambh of DOM *** //
// The window object rep. an open window in a browser & it is browser object created autometacially and  js obj. also not created by JS
window.console.log("hello2");  // SAME AS console.log("hello2")--same work done by both
//window.alert("Welcome to JS with Deepu Bhai!"); // SAME AS alert("Welcome to JS with Deepu Bhai!")

// const user = {
//   name: "Aarav",
//   age: 25,
//   address: { city: "Delhi", pin: 110001 }
// };

// console.dir(user);

console.dir(document.body);
console.log(document.body);

// *** DOM Manipulation *** // 
// Ways to access our elements
// 1.) Selecting with ID name
document.getElementById("myid")
// 2.) Selecting with Class name
document.getElementsByClassName("myClass")
// 3.) Selecting with Tag name
document.getElementsByTagName("p")
// EXAMPLE:
let heading = document.getElementById("heading"); //h1
console.dir(heading);


let headings = document.getElementsByClassName("heading"); //h1