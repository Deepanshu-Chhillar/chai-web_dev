// Destructuring 
const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Deepu Bhai"
}
// course.courseInstructor // can use this meathod for grtting output 
// meathod for clean output 
const {courseInstructor: Instructor} = course
console.log(Instructor); // Deepu Bhai

// Destructuring 
const navbar = ({company}) => {
    console.log(company); // Google
}
navbar({company: "Google", course: "React JS", price: "1999"});

// API's -- Nothing just the values coming from backend and we have to write them these values comes in JSON format
// SYNTAX for JSON-API = how it looks like 
{
    "name"; "Deepu Bhai",
    "course"; "JS in Hindi",
    "price"; 999
}
//JSON - JavaScript Object Notation
// FOR Array format API
[
    {something: "value1"},
    {something: "value2"},
    {something: "value3"},
]
