// ====== CONFIG ======
const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";
const TODOS_STORAGE_KEY = "todos_20";

// ====== DATA HELPERS ======
async function fetchTodosFromAPI() {
  const response = await fetch(TODOS_API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch todos from API");
  }
  const allTodos = await response.json();
  // Keep only first 20
  return allTodos.slice(0, 20);
}

function saveTodosToLocalStorage(todos) {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

function getTodosFromLocalStorage() {
  const raw = localStorage.getItem(TODOS_STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error parsing todos from localStorage", e);
    return [];
  }
}

// ====== UI RENDERING ======
function renderTodos() {
  const todos = getTodosFromLocalStorage();
  const listEl = document.getElementById("todo-list");
  const emptyMessageEl = document.getElementById("empty-message");

  listEl.innerHTML = ""; // Clear list

  if (todos.length === 0) {
    emptyMessageEl.style.display = "block";
    return;
  } else {
    emptyMessageEl.style.display = "none";
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    // Left side: status dot + texts
    const left = document.createElement("div");
    left.className = "todo-left";

    const statusDot = document.createElement("div");
    statusDot.className =
      "status-indicator " +
      (todo.completed ? "status-completed" : "status-pending");

    const textWrapper = document.createElement("div");
    textWrapper.className = "todo-text";

    const titleEl = document.createElement("span");
    titleEl.className = "todo-title";
    if (todo.completed) {
      titleEl.classList.add("completed");
    }
    titleEl.textContent = todo.title;

    const metaEl = document.createElement("span");
    metaEl.className = "todo-meta";
    metaEl.textContent = `ID: ${todo.id} • User: ${todo.userId}`;

    textWrapper.appendChild(titleEl);
    textWrapper.appendChild(metaEl);
    left.appendChild(statusDot);
    left.appendChild(textWrapper);

    // Right side: actions
    const actions = document.createElement("div");
    actions.className = "todo-actions";

    // Toggle / Mark Complete button (Bonus)
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn-small btn-toggle";
    if (todo.completed) {
      toggleBtn.classList.add("completed");
      toggleBtn.textContent = "Mark Incomplete";
    } else {
      toggleBtn.textContent = "Mark Complete";
    }
    toggleBtn.addEventListener("click", () => handleToggleTodo(todo.id));

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-small btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => handleDeleteTodo(todo.id));

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(left);
    li.appendChild(actions);

    listEl.appendChild(li);
  });
}

// ====== ACTIONS ======
function handleDeleteTodo(id) {
  let todos = getTodosFromLocalStorage();
  todos = todos.filter((t) => t.id !== id);
  saveTodosToLocalStorage(todos);
  renderTodos();
}

function handleToggleTodo(id) {
  const todos = getTodosFromLocalStorage();
  const updated = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodosToLocalStorage(updated);
  renderTodos();
}

async function loadInitialTodos() {
  let todos = getTodosFromLocalStorage();
  if (todos.length === 0) {
    try {
      todos = await fetchTodosFromAPI();
      saveTodosToLocalStorage(todos);
    } catch (error) {
      console.error(error);
      alert("Error fetching todos from API. Check console for details.");
    }
  }
  renderTodos();
}

async function reloadFromAPI() {
  try {
    const todos = await fetchTodosFromAPI();
    saveTodosToLocalStorage(todos);
    renderTodos();
  } catch (error) {
    console.error(error);
    alert("Error fetching fresh todos.");
  }
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  const reloadBtn = document.getElementById("reload-btn");
  reloadBtn.addEventListener("click", reloadFromAPI);

  loadInitialTodos();
});
