// for of loop ****** (Array specific loop)
// Applying loop with arrays or object is vip in js    as we get all data in array format from api 

let arr = [1,2,3,4,5]             // here use of let / const is same 
for (const numbers of arr) {     // HERE we can use let  or const nothing gonna change 
    console.log(numbers);
}

// MAPS  ==  Holds key value pairs and remember the order of the keys as we gonna put it unless oject(stores randomly) , we can use these keys as we want to use like:- we can use it as a string, number 
const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United states of America")
map.set(`FR`, "France")
map.set(`IN`, "India")   ///This didnt got printed 

console.log(map)
for (let key of map) {
    console.log(key);
}  // Not that much better to get as an output
for (let [key, value] of map ) {
    console.log(key, `:-`, value);
}  // This is much better output to see/get as compared to previous one 

//////  Now using for loop on object
// const myObject = {
//     `game1`: `NFS`,
//     `game2`: `spiderman`,
// }
// for (const [key, value] of myObject) {
//     console.log(key, `:-` , value);
// }                                      ~~~~~~~~~~~~~~~~~~ Objects cant be iterate by using this meathod 


//    FOR OBJECTS WE GONNA USE FOR IN LOOP
const myObject = {
    js: `JavaScript`,
    cpp: `c++`,
    rb: `ruby`,
    swift: `Swift by apple` 
}
for (const key in myObject) {
    console.log(key);  // Prints:- js  cpp  rb  swift
    console.log(myObject[key]); // Prints:- JavaScript  c++  ruby  Swift by apple
    console.log(`${key} shortcut is for ${myObject[key]}`); // prints:-  js shortcut is for javascript 
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming); // prints:- 0  1  2  3  4 
    console.log(programming[key]); // prints:- js  rb  py  java  cpp 

}




////////     for each loop ***********
const coding = ["js", "rb", "py", "java", "cpp"]
coding.forEach( function name(value) {
    console.log(value);    ///  Prints:- js  rb  py  java  cpp
})
coding.forEach( (value, index) => {
    console.log(index, value);   /// Prints:- 0 js  1 rb  2 py  3 java  4 cpp
} )
coding.forEach(printMe)  // function name can be anything  --  Prints :- js  rb  py  java  cpp



//  * * * * ** * * * * *  * * *  * *VIP--How to access item in a Arrary having function in it     ** *  **  ** * * * * * * * * ** * * ** * ***
let myCoding = [{
    langName: "JavaScript",
    langFileName: "js",
    },
    {
    langName: "Ruby",
    langFileName: "rb",
    },
    {
    langName: "Python",
    langFileName: "py",
    },];
myCoding.forEach ((item) => {

    console.log(item.langName, "has file extension as", item.langFileName);
})


