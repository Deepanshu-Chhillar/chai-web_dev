// LETS Say we want to make a setup to set username of a user for discord that its taken or not...!

function SetUsername(username){
    //complex DB Calls
    this.username = username;
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


