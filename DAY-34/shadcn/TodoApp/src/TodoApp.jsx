import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text) return;
    setTodos([...todos, { text, completed: false }]);
    setText("");
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => {
                const updated = [...todos];
                updated[index].completed = !updated[index].completed;
                setTodos(updated);
              }}
            />
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
