// Select the ul and button
let myList = document.querySelector("#myList");
let btn = document.querySelector("#addBtn");

// Add click event to button
btn.addEventListener("click", function () {
  let newItem = document.createElement("li");

  // Count existing list items + create new item text
  let itemNumber = myList.children.length + 1;
  newItem.textContent = "Java Script" + itemNumber;

  // Odd sequence: bold + blue
  if (itemNumber % 2 !== 0) {
    newItem.style.fontWeight = "bold";
    newItem.style.color = "blue";
  }
  // Even sequence: italic + red
  else {
    newItem.style.fontStyle = "italic";
    newItem.style.color = "red";
  }

  // Append to the list
  myList.appendChild(newItem);
});
