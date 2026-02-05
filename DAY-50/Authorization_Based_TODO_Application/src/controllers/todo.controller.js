import { supabase } from "../config/supabase.js";

export const createTodo = async (req, res) => {
  const { title } = req.body;

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, user_id: req.user.userId }])
    .select();

  if (error) return res.status(400).json({ message: error.message });

  res.status(201).json(data);
};

export const getTodos = async (req, res) => {
  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", req.user.userId);

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.user_id !== req.user.userId)
    return res.status(403).json({ message: "Unauthorized" });

  const { data } = await supabase
    .from("todos")
    .update({ title, completed })
    .eq("id", id)
    .select();

  res.json(data);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.user_id !== req.user.userId)
    return res.status(403).json({ message: "Unauthorized" });

  await supabase.from("todos").delete().eq("id", id);
  res.json({ message: "Todo deleted" });
};
