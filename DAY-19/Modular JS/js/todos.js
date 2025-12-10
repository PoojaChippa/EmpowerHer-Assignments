const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "login.html";
}

import { getNavbar } from "./navbar.js";
import { getFooter } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = getNavbar();
document.getElementById("footer").innerHTML = getFooter();

async function loadTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  displayTodos(data);
}

loadTodos();
