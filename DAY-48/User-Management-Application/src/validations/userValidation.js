const validateUser = (req, res, next) => {
  const { name, email, password, age } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Name is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({
      error: "Password must be at least 8 characters long",
    });
  }

  if (age !== undefined) {
    if (typeof age !== "number" || age < 18) {
      return res.status(400).json({
        error: "Age must be a number and at least 18",
      });
    }
  }

  next();
};

module.exports = validateUser;
