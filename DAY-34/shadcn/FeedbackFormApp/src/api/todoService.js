import axiosInstance from "./axiosInstance";

/* Fetch all todos */
export const getTodos = () => {
  return axiosInstance.get("/todos");
};

/* Fetch single todo by ID */
export const getTodoById = (id) => {
  return axiosInstance.get(`/todos/${id}`);
};
