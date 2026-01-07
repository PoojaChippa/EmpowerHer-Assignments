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

  // 🔹 Load todos
  const loadTodos = async () => {
    if (!user) return;
    const data = await todoService.fetchTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    if (!user) return;

    let isMounted = true;

    const fetchTodos = async () => {
      const data = await todoService.fetchTodos(user.uid);
      if (isMounted) setTodos(data);
    };

    fetchTodos();

    return () => {
      isMounted = false;
    };
  }, [user]);

  // 🔹 Create todo
  const handleCreateTodo = async () => {
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

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar todos={todos} onSelect={setSelectedTodo} />

        <main className="flex-1 p-6">
          {/* Create Todo */}
          <div className="flex gap-2 mb-6">
            <Input
              placeholder="Enter new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={handleCreateTodo}>Add</Button>
          </div>

          {/* Todo Details */}
          {selectedTodo ? (
            <>
              <h2 className="text-xl font-semibold mb-2">
                {selectedTodo.title}
              </h2>

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
