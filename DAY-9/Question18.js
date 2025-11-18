//Scoping & Optional Chaining

//a What is output and explain why?
if (true) {
  let x = 10;
  var y = 20;
}
//console.log(y);
//console.log(x);

console.log("connsole.log(y): 20");
console.log(
  "console.log(x): ReferenceError: x is not defined. Because, the blocke-scoped is not available outside the {}."
);

console.log("\n");
//b optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com",
    },
  },
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

console.log("\n");
//c  Create an example where optional chaining prevents a runtime error when accessing a missing nested property.

const data = {
  product: {
    name: "bag",
    info: null,
  },
};

console.log(data?.product?.info?.price);
