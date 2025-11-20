//1. Template Literals + Expressions
//a
console.log(`5 + 7 = ${5 + 7}`);

//b
const multi = ` Pooja Chippa
BTech 4th Year
AI&ML Branch`;
console.log(multi);

//c
const firstName = "Pooja";
const lastName = "Chippa";
console.log(`${firstName} ${lastName}`); // "John Doe"

//2.Arrow Functions & this
//a
const square = (n) => n * n;

//b solution.
console.log(
  "Beacuse arrow function do not have their own 'this' keyword. They capture this from the surrounding lexical scope, so 'this.value' is provides undefined instead use 'object.value'."
);

//c
const obj = {
  value: 50,
  test() {
    console.log(this.value);
  },
};
obj.test();

//3. Rest, Spread & Copying Objects

//a
const product = { name: "Pen", price: 10 };
const copy = { ...product };

//b
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };

//c
const maxValue = (...nums) => (nums.length ? Math.max(...nums) : -Infinity);
console.log(maxValue(12, 4, 16, 35, 25));

//4. Destructuring & Optional Chaining

//a
const arr = [10, 20, 30];
const [A, B] = arr;
console.log([A, B]);

//b
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log({ brand });

//c
const info = {};
console.log(info?.some?.prop);

//5. Scoping (let/var/const)

//a
for (var i = 0; i < 3; i++) {}
console.log(i);
console.log("It prints '3'");

//b
for (var i = 0; i < 3; i++) {}
console.log(i);
console.log(" ReferenceError: j is not defined");

//c
console.log(
  "const creates a binding that cannot be reassigned. It’s used for values that should remain the same reference; note that for objects/arrays the contents can still be mutated."
);

//6. Ternary Operator

//a
let speed = kmph > 60 ? "Fast" : "Normal";

//b
const category = age >= 18 ? "Adult" : "Minor";

//c
const sign = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

//7. Spread, Rest & Arrays

//a
const nums = [1, 2, 3];
const extended = [...nums, 4, 5];

//b
const p = ["x", "y"];
const q = ["z"];
const combined = [...p, ...q];

//c
const printNames = (...names) => names;
printNames("A", "B", "C");

//8. Object Destructuring & Shorthand

//a
const user = { id: 101, status: "active" };
const { id, status } = user;

//b
const Id = 101;
const Role = "admin";
const User = { Id, Role };

//c
const name = "Pooja";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log(`Hello,${name}`);
  },
};

//9. Template Literals
//a
console.log(`Today is ${new Date().toDateString()}`);

//b
const NAME = "Pooja",
  SCORE = 96;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

//10. Arrow Function Shorthands
//a
const add = (a, b) => a + b;

//b
const isAdult = (age) => age >= 18;

//c
const double = (n) => n * 2;

//11. Spread Operator (Arrays & Objects)
//a
const Arr = [1, 2, 3];
const clone = [...Arr];

//b
const with100 = [100, ...arr];

//c
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const merge = { ...o1, ...o2 };

//12. Optional Chaining

//a
const user1 = { name: "Alex", address: { city: "Bangalore" } };
console.log(user1?.address?.city);

//b
console.log(user1?.job?.title);

//c
const data = null;
console.log(data?.profile?.email);
