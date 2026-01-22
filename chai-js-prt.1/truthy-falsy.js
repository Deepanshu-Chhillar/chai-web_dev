// FALSY VALUES 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN ------------------    TBR    ********

// TRUTHY VALUES - all values except falsy values as truthy values
// some different examples are :--
// "0", "false", " ", [], {}, function(){} ==== strings & empty things etc

// how to get to know that an array is empty
/* if(arr.length === 0) {
    console.log("array is empty"); }*/

// how to get to know that an object is empty
/** if (object.keys(emptyObj).length===0) {
 * console.log("object is empty");}
*/




// Nullish coalescing Operator (??): null, Undefined
let val1;
let val2;
val1 = 5 ?? 10
val2 = 10 ?? 5
console.log(val1); //5
console.log(val2); //10

//Terniary Operator 
// SYNTAX :-- condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
