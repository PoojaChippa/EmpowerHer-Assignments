export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  container.innerHTML = "";

  data.forEach((todo) => {
    const div = document.createElement("div");
    div.textContent = `${todo.id}. ${todo.title} - ${
      todo.completed ? "Yes" : "No"
    }`;
    container.appendChild(div);
  });
}
