// Different operators 
/* == used for assignment 
   === used for strict checking 
   like,,,
   2 == '2'  ye code chal jayegaa
   2 === '2' ye code nhi chalegaaa*/

let score = 200

if (score > 100) {
   let power = "fly"
   console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`); //ERROR This line dint got printed as this line is out of scope of upper if condition



let userLoggedIn = true
let debitCaed = true
let loggedInFromGoogle = false
let loggedInFromEmail = true 

if (userLogedIn && debitCard && 2==3) {
   console.log("Allow to buy course");         //nhi ho payega as 2 is not equal to 3 it is false
}
if (loggedInFromGoogle || loggedInFromEmail ) {
   console.log("User Logged In")
}


// SYNTAX SWITCH CASE
// switch (key) {
//    case value:

//       break;

//    default:
//       break;   
// }

let month = 3 
switch (month) {
   case 1:
      console.log("Januaury");
      break;
   case 2:
      console.log("Feb");
      break;
   case 3:
      console.log("March");
      break;
   default:
      console.log("default case match");
      break;
}
//////  INTERVIEW QUESTION INCLUDING BREAK 
//Here as the key got matched like cance1 or any key got matched then full code got executed below that case/key ""EXCEPT DEFAULT""that's why we use ""break"" here

const months = "feb"
switch (months) {
   case "jan":
      console.log("Jan");
      break;
   case "feb":
      console.log("FEB") 
      break;
   default:
      console.log("Nothing got matched");  
      break;
}
