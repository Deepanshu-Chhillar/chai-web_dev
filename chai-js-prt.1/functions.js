function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
const result = addTwoNumbers(5, 10);
console.log("result: ", result); //prints undefined

function add2numbers(number1, number2) {
    // let ans = number1 + number2;
    // return ans;  
    // console.log("chai"); //this line will never be executed AS AFTER return statement function exits and nothing gonna work after return
    return number1 + number2;
    //This is easy and samll way to declare function
}
const ans = add2numbers(5, 10);
console.log("Result: ", ans); //prints 15


// function calling 
function loginUserMessage(username) {
    if(!username){                                      //(username == undefined) bhi kar skte hai in place of !username
        console.log("Please enter a username");  
        return;                                 // Prints:- Please enter a username
    }                                           //            Undefined
    return `${username} just logged in`
}
console.log(loginUserMessage("sammy")); //prints "sammy just logged in"
//loginUserMessage("sammy"); //Nothing gonna print as we are not using print statement(console one) or storing the returned value
console.log(loginUserMessage("")); //prints just logged in
console.log(loginUserMessage()); //prints undefined just logged in

