import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

/* Utility functions */
const readDB = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

/* GET all students */
app.get("/students", (req, res) => {
  const db = readDB();
  res.json(db.students);
});

/* POST new student */
app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const db = readDB();
  const newStudent = {
    id: Date.now(),
    name,
    course,
    year,
  };

  db.students.push(newStudent);
  writeDB(db);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent,
  });
});

/* PUT update student */
app.put("/students", (req, res) => {
  const { id, name, course, year } = req.body;
  const db = readDB();

  const studentIndex = db.students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  db.students[studentIndex] = {
    ...db.students[studentIndex],
    name: name ?? db.students[studentIndex].name,
    course: course ?? db.students[studentIndex].course,
    year: year ?? db.students[studentIndex].year,
  };

  writeDB(db);

  res.json({
    message: "Student updated successfully",
    student: db.students[studentIndex],
  });
});

/* DELETE student by id */
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const db = readDB();

  const filteredStudents = db.students.filter((student) => student.id !== id);

  if (filteredStudents.length === db.students.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  db.students = filteredStudents;
  writeDB(db);

  res.json({ message: "Student deleted successfully" });
});

/* Server */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
