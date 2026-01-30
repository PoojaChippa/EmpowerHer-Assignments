import { supabase } from "../config/supabaseClient.js";
import { validateSignup } from "../validations/userValidation.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const errorMsg = validateSignup(name, email, password);
    if (errorMsg) {
      return res.status(400).json({ message: errorMsg });
    }

    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const { error } = await supabase
      .from("users")
      .insert([{ name, email, password }]);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
