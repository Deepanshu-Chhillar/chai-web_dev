//  {} -- these curly brackets are known as scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c= 30
    console.log("Inner: ", a);  //PRINTS:--  Inner: 10
}                                   //       300

// console.log(a);  // gives error as in those bracckets let a work has finished and no return value is used so gives error 
// console.log(b);  // as error as we see in a 
// console.log(c);  // 30 prints jabki 30 aana nhi chaiye tha bahar if ke {}brackets se also we declare var c = 300 so we didnt use var


function one() {
    const username = "Hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  -- gives error as it is not in the function two scope

    two()
}
one()    // Prints :- Hitesh