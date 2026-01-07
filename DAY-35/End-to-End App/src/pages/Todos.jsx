import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/todo.service";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import UpdateTodoModal from "../components/UpdateTodoModal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Todos() {
  const { user } = useAuth();

  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const loadTodos = async () => {
    const data = await todoService.fetchTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    if (user) loadTodos();
  }, [user]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const createTodo = async () => {
    if (!newTodo.trim()) return;
    await todoService.createTodo({
      title: newTodo,
      completed: false,
      uid: user.uid,
      createdAt: Date.now(),
    });
    setNewTodo("");
    loadTodos();
  };

  const toggleStatus = async () => {
    await todoService.updateTodo(selectedTodo.id, {
      completed: !selectedTodo.completed,
    });
    loadTodos();
  };

  const deleteTodo = async () => {
    await todoService.deleteTodo(selectedTodo.id);
    setSelectedTodo(null);
    loadTodos();
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar filter={filter} setFilter={setFilter} />

      <div className="flex flex-1">
        <Sidebar
          todos={filteredTodos}
          selectedTodo={selectedTodo}
          onSelect={setSelectedTodo}
        />

        <main className="flex-1 p-6">
          <div className="flex gap-2 mb-6">
            <Input
              placeholder="New todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={createTodo}>Add</Button>
          </div>

          {selectedTodo ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {selectedTodo.title}
              </h2>

              <div className="flex gap-2 mb-4">
                <Button onClick={toggleStatus}>
                  Mark as {selectedTodo.completed ? "Pending" : "Completed"}
                </Button>

                <Button variant="destructive" onClick={deleteTodo}>
                  Delete
                </Button>
              </div>

              <UpdateTodoModal todo={selectedTodo} refreshTodos={loadTodos} />
            </>
          ) : (
            <p className="text-gray-500">Select a todo</p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
