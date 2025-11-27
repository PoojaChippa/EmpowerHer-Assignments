// Selecting input fields
let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");

// Selecting the buttons
let bgBtn = document.getElementById("bgBtn");
let textBtn = document.getElementById("textBtn");

// Selecting the div whose background and text will change
let box = document.getElementById("myBox");

/*
    Functionality 1: Change Background Color
*/
bgBtn.addEventListener("click", function () {
  let color = colorInput.value.trim(); // Get the entered color

  // Apply the color
  box.style.backgroundColor = color;

  /*  
        Check whether the color was actually applied.
        If invalid, the browser will reset it to an empty string.
    */
  if (box.style.backgroundColor === "" && color !== "") {
    alert("Invalid color name!");
  }
});

/*
    Functionality 2: Update Text Content
*/
textBtn.addEventListener("click", function () {
  let newText = textInput.value.trim(); // Get the entered text

  // Validate input
  if (newText === "") {
    alert("Please enter some text!");
    return;
  }

  // Update the div content
  box.textContent = newText;
});
