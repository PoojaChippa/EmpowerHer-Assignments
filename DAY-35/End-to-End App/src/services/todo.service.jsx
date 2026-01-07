import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const todosRef = collection(db, "todos");

export const fetchTodos = async (uid) => {
  const q = query(todosRef, where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const createTodo = (todo) => addDoc(todosRef, todo);

export const updateTodo = (id, data) => updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) => deleteDoc(doc(db, "todos", id));
