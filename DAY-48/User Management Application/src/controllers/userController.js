const supabase = require("../config/supabaseClient");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { getUserByEmail, getUserById } = require("../services/userService");

/* CREATE USER */
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body;

    const { data: existingUser } = await getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("users").insert([
      {
        id: uuidv4(),
        name,
        email,
        password: hashedPassword,
        age,
        role: role || "user",
      },
    ]);

    if (error) throw error;

    res.status(201).json({
      message: "User created successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET ALL USERS */
exports.getAllUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, role, created_at");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET USER BY ID */
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await getUserById(id);
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(400).json({ error: "Invalid user ID" });
  }
};

/* UPDATE USER */
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { data: user } = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { error } = await supabase
      .from("users")
      .update(req.body)
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* DELETE USER */
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { data: user } = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) throw error;

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid user ID" });
  }
};
