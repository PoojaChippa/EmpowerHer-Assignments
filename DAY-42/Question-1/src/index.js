import express from "express";
import todosRouter from "./routes/todos.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

// App-level middleware (Logger)
app.use(loggerMiddleware);

// Todo routes
app.use("/todos", todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
