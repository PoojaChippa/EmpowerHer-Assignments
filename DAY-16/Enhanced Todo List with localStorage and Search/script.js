// Key to store tasks in localStorage
const TASKS_KEY = "enhancedTodoTasks";

// This array will hold all tasks in memory
// Each task = { id: string, text: string, completed: boolean }
let tasks = [];

// Get references to important DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

/**
 * Generate a unique ID for each task.
 * Uses current timestamp + random string.
 */
function generateId() {
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

/**
 * Save the current tasks array to localStorage as a JSON string.
 */
function saveTasksToLocalStorage() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

/**
 * Load tasks from localStorage.
 * If none are found, tasks will be an empty array.
 */
function loadTasksFromLocalStorage() {
  const stored = localStorage.getItem(TASKS_KEY);
  if (stored) {
    try {
      tasks = JSON.parse(stored);
    } catch (e) {
      // If parsing fails for some reason, reset to empty array
      tasks = [];
    }
  } else {
    tasks = [];
  }
}

/**
 * Render tasks on the page.
 * @param {string} filterText - Text input from search bar to filter tasks.
 */
function renderTasks(filterText = "") {
  // Clear the current list
  taskList.innerHTML = "";

  const lowerFilter = filterText.toLowerCase();

  // Loop through tasks and create list items
  tasks.forEach(function (task) {
    // If search text doesn't match, skip this task
    if (!task.text.toLowerCase().includes(lowerFilter)) {
      return;
    }

    // Create <li> for the task
    const li = document.createElement("li");
    li.dataset.id = task.id; // Store id in data attribute

    // Create left section (checkbox + text)
    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    // Checkbox to mark task as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "toggle-complete";
    checkbox.checked = task.completed;

    // Span to show task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    // If completed, add CSS class for visual indication
    if (task.completed) {
      li.classList.add("completed");
    }

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    // Delete button for removing the task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Append left section and delete button to li
    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    // Append li to the task list (ul)
    taskList.appendChild(li);
  });
}

/*
 * Handle adding a new task when "Add Task" button is clicked.
 */
function handleAddTask() {
  const text = taskInput.value.trim();

  // Basic validation: don't allow empty task
  if (text === "") {
    alert("Task cannot be empty.");
    return;
  }

  // Create new task object
  const newTask = {
    id: generateId(),
    text: text,
    completed: false,
  };

  // Add to tasks array and persist to localStorage
  tasks.push(newTask);
  saveTasksToLocalStorage();

  // Clear input and re-render list
  taskInput.value = "";
  renderTasks(searchInput.value);
}

/*
 * Handle clicks inside the task list (event delegation).
 * We check if the click was on a delete button or checkbox.
 */
function handleTaskListClick(event) {
  const target = event.target;
  const li = target.closest("li");

  // If click is not inside an <li>, ignore
  if (!li) return;

  const taskId = li.dataset.id;

  // If delete button clicked
  if (target.classList.contains("delete-btn")) {
    // Remove this task from array
    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });

    saveTasksToLocalStorage();
    renderTasks(searchInput.value);
  }

  // If checkbox clicked
  if (target.classList.contains("toggle-complete")) {
    // Toggle completed status of this task
    tasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    saveTasksToLocalStorage();
    renderTasks(searchInput.value);
  }
}

// ----------------- EVENT LISTENERS -----------------

// Add task when button is clicked
addTaskBtn.addEventListener("click", handleAddTask);

// Add task when Enter is pressed in input box
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleAddTask();
  }
});

// Real-time search: filter tasks as user types
searchInput.addEventListener("input", function () {
  renderTasks(searchInput.value);
});

// Handle clicks on delete buttons and checkboxes
taskList.addEventListener("click", handleTaskListClick);

// On initial page load: load tasks from localStorage and render them
window.addEventListener("load", function () {
  loadTasksFromLocalStorage();
  renderTasks();
});
