const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const pass = "Paballo1327@";

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: pass,
  database: "blogdb",
});

router.put("/user/:id", (req, res) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;
  pool.query(
    "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?",
    [username, email, password, userId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json({ message: "User updated successfully" });
    }
  );
});

// PUT request to update a post by ID
router.put("/posts/:id", (req, res) => {
  // Note the change to "/posts/:id"
  const postId = req.params.id;
  const { title, content, image } = req.body; // Assuming you also want to update the image
  pool.query(
    "UPDATE posts SET title = ?, content = ?, image = ? WHERE id = ?",
    [title, content, image, postId], // Include image in the query parameters
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (results.affectedRows === 0) {
        // No rows were affected, which means the post was not found
        res.status(404).json({ message: "Post not found" });
        return;
      }
      res.json({ message: "Post updated successfully" });
    }
  );
});

// PUT request to update a comment by ID
router.put("/comment/:id", (req, res) => {
  const commentId = req.params.id;
  const { content } = req.body;
  pool.query(
    "UPDATE comments SET content = ? WHERE id = ?",
    [content, commentId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json({ message: "Comment updated successfully" });
    }
  );
});

module.exports = router;
