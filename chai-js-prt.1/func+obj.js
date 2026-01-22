function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500)) //Prints[ 200, 400, 500 ] -- we get an array becoz of ... (rest/spread operator)
/*function calculateprice(val1, val2, ...num1){
    return num1
}
console.log(calculateprice(200, 400, 500, 600, 700))//Prints[ 500, 600, 700 ]--AS 200 goes to val1 and 400 goes to val2 and rest goes to num1 */


const user = {
    username: "Deepu",
    price: 199,
}
// Now how to use it in a function and how to pass it
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user) //Username is Deepu and price is 199
// We can also do that
handleObject({
    username: "Chai",
    price: 299,
})              // Prints Username is Chai and price is 299
// How to do similar thing with Arrays
const fruits = ["Apple", "Mango", "Banana"]
function returnArray(arr){
    return arr[1]
}
console.log(returnArray(fruits)) //Prints Mango


