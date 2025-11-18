//Arrow Functions & Ternary Operator

//a arrow functions

const isEven = (n) => n % 2 === 0;

console.log(isEven(4));
console.log(isEven(35));
console.log(isEven(16));

//b ternary operator
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

//c  ternary operator.
const greet = (name) => console.log(`Hello,${name ? name : "Guest"}`);
greet("Pooja");
greet();
