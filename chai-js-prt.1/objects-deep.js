//const tinderUser = new Object();
const tinderUse = {}

tinderUser.name = "samay"
tinder.age = "22"
tinder.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gpt.com",
    fullname: {
        userfullname: {
            firstname: "samay",
            lastname: "kaal"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname); // samay  
// optional chaining operator(?.) -- used to avoid error if any key is missing in between the chain of keys
// Basically it checks that if fullname key is present then only access userfullname key else return undefined as while fatching API Keys we have to use if else so better to use ? operator instead of if els


const obj1 = {1: "Ananya", 2: "Utsav"}
const obj2 = {3: "Khushi", 4: "Deepanshu"}
const obj3 = {5: "Shreestha", 6: "Manish"}

const newObj = Object.assign({}, obj1, obj2, obj3) // merging multiple objects into one object using Object.assign() method
console.log(newObj); // { '1': 'Lavanya', '2': 'Utsav', '3': 'Khushi', '4': 'Deepanshu', '5': 'Shreestha', '6': 'Manish' }

// Another way to merge objects using spread operator(...)
const newObj2 = {...obj1, ...obj2, ...obj3}
console.log(newObj2); // { '1': 'Lavanya', '2': 'Utsav', '3': 'Khushi', '4': 'Deepanshu', '5': 'Shreestha', '6': 'Manish' }

// SYNTAX we gonna use when we get data from data base or API
const users = [
    {
        id: 1,
        email: "some@chatgpt.com"
    },
    {
        id: 2,
        email: "DLK@match.com"
    }
]
users[2].email
//console.log(users[2].email); // undefined as we dont have index 2 in users array
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // to get all keys of object as array now in this array we can apply loops on it or use it in different things
console.log(Object.values(tinderUser)); // to get all values of object as array
console.log(Object.entries(tinderUser)); // to get all key value pairs of object as array of arrays

// to check if object has a particular value or not is not it can crash as we are fetching data from an API
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('lastLoggedIn')); // false

