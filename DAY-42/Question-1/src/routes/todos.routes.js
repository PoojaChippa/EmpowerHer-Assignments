import express from "express";
import fs from "fs";
import rateLimiterMiddleware from "../middleware/rateLimiter.middleware.js";
import validateTodoMiddleware from "../middleware/validateTodo.middleware.js";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// Create Todo
router.post("/add", validateTodoMiddleware, (req, res) => {
  const db = readDB();
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

//  Get All Todos
router.get("/", rateLimiterMiddleware, (req, res) => {
  const db = readDB();
  res.status(200).json(db.todos);
});

//  Get Single Todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find((t) => t.id === Number(req.params.todoId));

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
});

//  Update Todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex((t) => t.id === Number(req.params.todoId));

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.status(200).json(db.todos[index]);
});

//  Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex((t) => t.id === Number(req.params.todoId));

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = db.todos.splice(index, 1);
  writeDB(db);

  res.status(200).json(deletedTodo[0]);
});

export default router;
