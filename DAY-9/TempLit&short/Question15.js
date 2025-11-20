//Template Literals & Shorthands

//a Template Strings
const username = "Pooja";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);

//b Converted to Object Shorthand
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  },
};

//c Arrow Function Shorthand (Implicit Return)
const getFullName = (first, last) => "${first} ${last}";
