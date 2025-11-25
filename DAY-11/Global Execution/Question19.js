// Global variable
let age = 20;

function displayAge() {
  console.log("Age (inside displayAge):", age);
}

function changeAge() {
  age = 25; // Updating global variable
  console.log("Age updated to:", age);
}

// Calling the functions
displayAge();
changeAge();
displayAge();
