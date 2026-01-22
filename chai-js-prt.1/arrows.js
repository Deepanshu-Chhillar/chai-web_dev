const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)   //here this.username is used to reffer current context(particular object we formed here)  
        console.log(this); 
    }
}
user.welcomeMessage() // hitesh, welcome to website
user.username = "sam"  //if someone changes its name what gonna happen
user.welcomeMessage()  //sam , welcome to website

/*const addTwo = (num1, num2) => {
    return num1 + num2
    }   */

//const addTwo = (num1, num2) => ( num1 + num2 )     //Using {}= need to write return   using ()= not need to write return
// NOW HOW TO RETURN A OBJECT USING ARROW
const addTwo =(num1, num2) => ({username: "Hitesh"}) // { username: `hitesh }
console.log(addTwo(3,4))


