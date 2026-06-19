let user = {
    username: "Deepanshu",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        console.log("Got User details from datanbase");
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, signedIn){
    this.username = username;  //here this.username act as a variable and username is value we passed
    this.loginCount = loginCount;
    this.signedIn - SignedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //this is not mandatory to use but its a good practice to do soo.
}

let userOne = User("Deepanshu", 20, true)
let userTwo = User("Shubham", 11, false) // THIS WILL OVERWRITE USERONE EVERY DATA WHICH MAKES CODE SUCKS without event printing it
console.log(userOne);
// ***   THIS WILL BE SOLVED BY CONSTRUCTYION FUNCTION ***//
let userOne = new User("Deepanshu", 20, true)
let userTwo = new User("Shubham", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

