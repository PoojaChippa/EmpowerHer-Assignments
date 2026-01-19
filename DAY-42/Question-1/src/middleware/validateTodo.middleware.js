const validateTodoMiddleware = (req, res, next) => {
  const bodyKeys = Object.keys(req.body);

  if (
    bodyKeys.length !== 1 ||
    !bodyKeys.includes("title") ||
    typeof req.body.title !== "string"
  ) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed",
    });
  }

  next();
};

export default validateTodoMiddleware;
