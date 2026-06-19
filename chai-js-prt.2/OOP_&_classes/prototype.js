let myName = "Hitesh     "   //its current length = 11 but it need to be 6 by removing those space
let myChannel = "chai    "
//Meathod 1 : using trim() method
console.log(myName.trim().length);  //this is not good as here we have 2 diffenrt questions becoz of this meathod we have to rewrie it for myChannel prt. again which is not GOOD SOOO..

//meathod 2: we want japa pe bhi vo string ho sabke paas ek meathod aa jae named(truelength)
// doing itt...


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Webs",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }       
}
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`)
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.hryHitesh() //this will give error as heyHitesh is not a property of array
heroPower.heyHitesh() // this will work as it's present in prototype chain


// ** NOW Countinuing solution for meathod 2:**
let anotherUsername = "chaiAurCode     "
string.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength() 
"hitesh".trueLength()
"iceTea".trueLength()