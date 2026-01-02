import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/todoService";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then((response) => {
      setTodo(response.data);
    });
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="page">
      <h2>Todo Details</h2>

      <p>
        <strong>ID:</strong> {todo.id}
      </p>
      <p>
        <strong>Title:</strong> {todo.title}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed" : "Not Completed"}
      </p>

      <Link to="/">⬅ Back to Todo List</Link>
    </div>
  );
}

export default TodoDetails;
