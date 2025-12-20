import { TodoProvider } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  return (
    <TodoProvider>
      <div className="todo-container">
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default Todos;
