function mulBy5(num){
    return num*5;
}
//mulBy5(5)  or we can do 
mulBy5.power = 2

console.log(mulBy5(5));
console.log(mulBy5.power);
console.log(mulBy5.prototype);
//***  HENCE WE CAN SAY,   IN JS OBJ IS OBJ but everything like func. is also an OBJECT  ***/


function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

let chai = new createUser("chai", 25)
let tea = createUser("tea", 250)
chai.printMe();
tea.printMe();

/* 
here's what happening in bts when new keyword is used:
A New Object is created: The new keyword instances the creation of a new JS object.

A Prototype is Linked: the newely created obj. gets linked to the prototype property of the constructor function. this means that it has access to properties and meathods defined on the constructor's prototype.

the constructor is called: The constructor function is called with specific arguments and this is bound to newly created object if no explicit return value is specified from the constructor, JS assumes this, the newly created object, to be the intended return value.

the new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created boject is returned.

In summary, when you use the new keyword to create an instance of a class in JavaScript, a new object is created, linked to the constructor 's prototype, and then the constructor function is called with the specified arguments. If no return value is specified from the constructor, the newly created object is returned as the result.

*/

