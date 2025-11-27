// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Remove extra spaces

  // Edge case: Empty input should not add a task
  if (taskText === "") {
    alert("Please enter a task before adding!");
    return;
  }

  // Create <li> element
  const li = document.createElement("li");

  // Create span to hold the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Create "Complete" button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.marginLeft = "10px";

  // Create "Delete" button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "5px";

  // Attach event listener for "Complete"
  completeBtn.addEventListener("click", function () {
    taskSpan.classList.toggle("completed"); // Toggle completed class
  });

  // Attach event listener for "Delete"
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li); // Remove this <li>
  });

  // Append span and buttons to li
  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input and focus it again
  taskInput.value = "";
  taskInput.focus();
}
