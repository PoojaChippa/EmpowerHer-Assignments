import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    if (inputRef.current.value.trim() === "") return;

    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="add-todo">
      <input type="text" ref={inputRef} placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
