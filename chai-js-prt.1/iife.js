// iife = Immediately Invoked Function Expression  --  used for executing a function imediately 
// WHY WE NEED TO IMEDIATELY EXECUTE IT ??
/* (1.)let say we write a file which only has a database connection and we want as soon as our application starts
the connection of our database starts
(2.)sometimes we got a problem with pollution of global scope so to remove that global scope declaration/variable we gonna use iife*/

//Named IIFE
(function chai(){
    console.log(`DB Connected0`);
})();  //(HERE ;-=semicoloun is very important to run our code) -- as to write 2IIFE together ';` is vip
// here in iife we have used () for function and one outside function

// Un named IIFE
// We can also do this with an arrow function
(  (name) => {
    console.log(`DB Connected two ${name}`);
} ) (`deepu`)
