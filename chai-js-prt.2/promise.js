//  ******     PROMISES IN JAVASCRIPT    *****
// 1. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// 2. A promise can be in one of three states: pending, fulfilled, or rejected.
// 3. A promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function, and it is executed immediately when the promise is created.
// 4. The executor function takes two arguments: resolve and reject. These are functions that are used to change the state of the promise from pending to fulfilled or rejected, respectively.  
// 5. A promise can be consumed using the then method, which takes two arguments: onFulfilled and onRejected. These are functions that are called when the promise is fulfilled or rejected, respectively.
// 6. The then method returns a new promise, which allows for chaining of promises.
// 7. A promise can also be consumed using the catch method, which is a shorthand for then(null, onRejected).
// 8. Promises can be used to handle asynchronous operations in a more readable and maintainable way than callbacks, and they help to avoid callback hell.


// Creation of promises
let promiseOne = new promise(function(resolve, reject){
    //do an async. task
    //DB Calls, cryptographic, network   kinda works
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    } , 1000)
})

promiseOne.then(function(){                                   //THIS then is directly associated with resolve,, also .catch is directly 
    console.log("Promise Consumed");                              //                                             associated with reject.
})

////** Another way to do Same ***/
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})


let PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({Username: "Chai", email: "chai@example.com"})
    }, 1000)
})
PromiseThree.then(function(user){
    console.log("user");                 // gives the whole object data
    console.log(user.Username);          // gives the username only data
})


let PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({Username: "Chai", password: "123"})
        } else{
            reject("Error: Something went wrong")
        }
    } ,1000)
})
/*   One way to handle the error is to use catch method, which is a shorthand for then(null, onRejected).  
PromiseFour.then(function(user){}).catch(function(){})  */
PromiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(){
    console.log("Error")
})
.finally(() => console.log("The Promise is either resolved of rejected"))


// *****  ANOTHER WAY TO HANDLE PROMISES using async await *****
let PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({Username: "Javascript", password: "123"})
        } else{
            reject("Error: JS went wrong")
        }
    } ,1000)
})
async function consumePromiseFive(){
    try{
        let response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}  ////without try catch in async await meathod we cant handle the error, so we need to use try catch block to handle the error.
consumePromiseFive()

//littel xtra knowledge for nxt class
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ",error)
    }
}
getAllUsers()
//ALSO WE CAN USE .then() and .catch() with fetch method to handle the promises.
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("E: ", error)
})