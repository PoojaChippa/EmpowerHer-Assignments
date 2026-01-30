const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
