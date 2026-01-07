import axios from "axios";

const api = axios.create({
  baseURL: "https://firestore.googleapis.com",
});

export default api;
