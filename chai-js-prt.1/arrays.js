const myArr = [1, 2, 3, 4, 5, true, "Deepu"];
console.log(myArr[0]); 
console.log(myArr[6]);
// Array meathods
myArr.push("Hello"); // add element at last
console.log(myArr); // [ 1, 2, 3, 4, 5, true, 'Deepu', 'Hello' ]
myArr.pop(); // remove last element
console.log(myArr); // [ 1, 2, 3, 4, 5, true, 'Deepu' ]
myArr.shift(); // remove first element
console.log(myArr); // [ 2, 3, 4, 5, true, 'Deepu' ]
myArr.unshift("First Element"); // add element at first
console.log(myArr); // [ 'First Element', 2, 3, 4, 5, true, 'Deepu' ]

const newArr = myArr.join()
console.log(newArr); // First Element,2,3,4,5,true,Deepu
console.log(typeof newArr); // string

// slice method
const slicedArr = myArr.slice(1, 4);
console.log(slicedArr); // [ 2, 3, 4 ]
console.log(myArr); // [ 'First Element', 2, 3, 4, 5, true, 'Deepu' ]

// splice method
myArr.splice(1, 2, "Inserted Element");
console.log(myArr); // [ 'First Element', 'Inserted Element', 4, 5, true, 'Deepu' ]

const marvel = ["thor", "Ironman", "Hulk"];
const dc = ["Batman", "Superman", "Flash"];
console.log(marvel[2][1]); // Alag se Ironman ko access karne ke liye use karege nxt line main highlight karke

const allheroes = marvel.concat(dc);
console.log(allheroes); // [ 'thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash' ]
console.log(allheroes.sort()); // [ 'Batman', 'Flash', 'Hulk', 'Ironman', 'Superman', 'thor' ]
// in concat it willl give a new array not directly applicable on original one 
// but AS marvel.push(dc) will directly applicable on marvel(original) array

const all_new_heroes = [...marvel, ...dc];  // spread operator---Better than concat as in concat we can use only one & two arrays at ones but in spread operator we can use multiple arrays 
console.log(all_new_heroes); // [ 'thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // flat method to convert multi dimensional array to single dimensional array
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]






// While data scraping/selecting from web page it comes in different forms like in node etc. So to convert that data into array we use Array.from() method
console.log(Array.isArray("Deepu")); // false not an array
console.log(Array.from("Deepu")); // [ 'D', 'e', 'e', 'p', 'u' ] converted to array
console.log(Array.from({name: "Deepu"})); // [] not converted to array as it is an object not iterable     ----------   Case for Interview

