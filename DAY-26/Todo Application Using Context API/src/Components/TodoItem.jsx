import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;
