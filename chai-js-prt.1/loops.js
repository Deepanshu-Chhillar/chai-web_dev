// for loop SYNTAX
for (let index = 0;index < array.length; index++) {
    const element = array[index];
    console.log("element");
    //break/continue;
}
// console.log("element")  ---  ERROR As ye scope ke bahar hai

for (let i = 1; i<=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + `*` + j + `=` + i*j);
    // THIS PRINTS TABLE FROM 1 TO 10
    }
}

//break = it breaks the loop at last step where you write it
// continue = skips 1 value then continue the loop 




// *****  WHILE DO LOOP ******
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = [`Flash`, "Batman", "Superman"]
let arr = 0
while (arr < myArray.length) {
  console.log(`My Value is ${myArray[arr]}`);
  arr = arr + 1
}




// ****** DO WHILE LOOP ******
let score = 1
do {
  console.log(`score is ${score}`);
  score ++
} while (score <=10);