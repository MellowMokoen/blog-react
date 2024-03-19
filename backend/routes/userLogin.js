// routes/userLogin.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db"); // Adjust this path to your actual database connection module
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Assuming your users table has columns `username` and `hashed_password`
    const query = "SELECT * FROM users WHERE username = ?";
    const [users] = await pool.query(query, [username]);

    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.hashed_password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Replace 'yourSecretKey' with your actual secret key
    const token = jwt.sign({ userId: user.id }, "yourSecretKey", {
      expiresIn: "1h",
    });

    res.json({ token: token, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
