const coding = ["js", "rb", "py", "java", "cpp"]

const values = coding.forEach ( (item) => {
    console.log(item);
    //return item --  forEach method does not return any value wether u forcefully try to return value or not
})
console.log(values); // Prints:-js rb py java cpp   undefined   --  forEach method does not return any value it just iterate through the array

//Now sometimes we need to just return the value after some operation on each item of array and create a new array with those values , for that we use map method
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let newNums = myNums.filter( (num) => num > 4)
console.log(newNums); // Prints:- [ 5, 6, 7, 8, 9, 10... ]   --  filter method returns a new array after applying the condition on each item of array
// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = myNums.filter( (num) => {
//     return num > 4})
// console.log(newNums);      --------------          Without using return keyword it gives []-empty array in filter



// using of map meathod   -----   better than forEach 
let myArr = [1, 2, 3, 4, 5]
let newArr = myArr.map( (item) => item * 2 )   // we can also use return keyword here like in filter meathod (item) => { return item * 2 } )
console.log(newArr); // Prints:- [ 2, 4, 6, 8, 10 ]   --  map method returns a new array after applying the operation on each item of array


let myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNumbs = myNumbs.map( (num) => num + 5 )
                      .map( (num) => num * 2 )
                      .filter( (num) => num > 20 )
console.log(newNumbs); // Prints:- [ 22, 24, 26, 28, 30 ]   --  chaining of map and filter methods





////        ****  ** * * * * ** ** * * * * *  ** * *   *  REDUCE   ** * ** ** * **   **** ** * * * *** * * *  **  * **
//Accumulator is like a snowball  --  it accumulate value on each iteration -- 3rd parameter is initial value of accumulator
let numbers = [1, 2, 3, 4, 5]

let myTotal = numbers.reduce(function (accumulator, currentValue) {
    console.log(`accumulator ${accumulator} and curretnValue is ${currentValue}`);
    return accumulator + currentValue;
}, 0)
console.log(myTotal); // Prints:- 15   --  reduce method returns a single value after applying the operation on each item of array
// After applying console.log inside reduce method we get:-
// accumulator 0 and curretnValue is 1
// accumulator 1 and curretnValue is 2
// accumulator 3 and curretnValue is 3
// and go on last we get 15 as output

//Now using arrow function For it !!!
//const myTotal = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue , 0)
//console.log(myTotal); // Prints:- 15

