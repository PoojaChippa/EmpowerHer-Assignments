//Spread, Rest & Destructuring

//a  spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log(merged);

//b rest operator
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);

console.log(sum(12, 4, 16));
console.log(sum(4, 12));
console.log(sum());

//c destructuring (multi-level)

const user = {
  ////given
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001,
  },
};

const {
  name,
  address: { city, pin },
} = user;

console.log(name);
console.log(city);
console.log(pin);
