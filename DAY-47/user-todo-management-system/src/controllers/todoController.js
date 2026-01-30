import { supabase } from "../config/supabaseClient.js";
import { validateTodo } from "../validations/todoValidation.js";

/* CREATE TODO */
export const addTodo = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const errorMsg = validateTodo(title, userId);
    if (errorMsg) {
      return res.status(400).json({ message: errorMsg });
    }

    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .single();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await supabase
      .from("todos")
      .insert([{ title, description, user_id: userId }]);

    res.status(201).json({ message: "Todo created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/* GET USER TODOS */
export const getUserTodos = async (req, res) => {
  try {
    const { userId } = req.params;

    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .single();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { data: todos } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);

    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/* UPDATE TODO */
export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { data: todo } = await supabase
      .from("todos")
      .select("*")
      .eq("id", todoId)
      .single();

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await supabase.from("todos").update(req.body).eq("id", todoId);

    res.status(200).json({ message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/* DELETE TODO */
export const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { data: todo } = await supabase
      .from("todos")
      .select("id")
      .eq("id", todoId)
      .single();

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await supabase.from("todos").delete().eq("id", todoId);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
