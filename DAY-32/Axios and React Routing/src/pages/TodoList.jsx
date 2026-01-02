import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((response) => {
      setTodos(response.data.slice(0, 10)); // limit for display
    });
  }, []);

  return (
    <div className="page">
      <h2>Todo List</h2>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} —{" "}
              <strong>{todo.completed ? "Completed" : "Not Completed"}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
