import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { updateTodo } from "../services/todo.service";

export default function UpdateTodoModal({ todo, refreshTodos }) {
  const [title, setTitle] = useState(todo.title);
  const [open, setOpen] = useState(false);

  const handleUpdate = async () => {
    await updateTodo(todo.id, { title });
    refreshTodos();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>Edit</Button>
      <DialogContent>
        <DialogHeader>Edit Todo</DialogHeader>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button onClick={handleUpdate}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
