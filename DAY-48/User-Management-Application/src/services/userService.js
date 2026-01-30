const supabase = require("../config/supabaseClient");

const getUserByEmail = async (email) => {
  return await supabase.from("users").select("*").eq("email", email).single();
};

const getUserById = async (id) => {
  return await supabase.from("users").select("*").eq("id", id).single();
};

module.exports = {
  getUserByEmail,
  getUserById,
};
