//1. Select the <h1> element by its id and change its text
let heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

//2. Select all <p> elements using getElementsByTagName and set their text color to blue.
let paragraphs = document.getElementsByTagName("p");

for (let p of paragraphs) {
  p.style.color = "blue";
}

// 3. Use querySelector to select the first <div> with the class container and change its background color to yellow.
let containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
