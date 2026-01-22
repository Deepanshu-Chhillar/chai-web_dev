//singleton -- when to declare object using object literals it will not form sigleton
// --> constructor function or class is used to form singleton
// object literals
const JsUser = {
    name: "Deepu",
    "full name": "Deepu Bhai",
    [mySym] : "myKey1",        // []=used to make it actas a symbol key else without[]it's used as string key 
    age: 19 ,
    location: "India",
    email: "deepu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
//console.log(jsUser.full name) // BAD WAY to access objects as can't access keys like "full name"
console.log(jsUser["full name"]) // GOOD WAY to access objects

//Interview Question: Take a symbol add it in the keys of object and print it
const mySym = Symbol("Key1")

console.log(JsUser.mySym) // myKey1 got printed instead of symbol -- this shows u noob programmer as its type is string === console.log(typeof JsUser[mySym])
console.log(JsUser[mySym]) // symbol key value got printed -- correct way

JsUser.email = "BOSE@google.com" //updating the email key value we use '=' for this work
console.log(JsUser.email);

// Adding new key value pair in object
JsUser.phoneNumber = "9999999999"
console.log(JsUser.phoneNumber);
JsUser.email = "hitesh@chatgpt.com"
object.freeze(JsUser)   ////////// freezng the object to avoid further changes
Jsuser.email = "hitesh@micro.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
console.log(JsUser.greeting); //Undefined as we freezed the object before adding this method
// --> we also got printed: [Function (anonymous)]
console.log(JsUser.greeting()); // As it is not a function it will give error
console.log(JsUser.greeting()); //Hello JS User printed as when we unfreezed our funcion we have done earlier

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.name} welcome back!`); // string interpolation using backticks(``) and ${this.anything}-used to access object key inside the function
}
console.log(JsUser.greetingTwo()); // Hello Deepu welcome back! printed

/********summary************/
// mostly time twe use something.something meathod to access object values
// we can also use something["something"] to access object values == useful when key has space in between or special characters == generally used for special cases like for key values 
