import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

// Route to get all blog posts
router.get("/", getPosts);

// Route to get a specific blog post by ID
router.get("/:id", getPost);

// Route to add a new blog post
router.post("/", addPost);

// Route to delete a blog post by ID
router.delete("/:id", deletePost);

// Route to update a blog post by ID
router.put("/:id", updatePost);

export default router;
