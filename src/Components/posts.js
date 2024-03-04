import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../Components/db';

const router = express.Router();

// Get all posts or posts by category
router.get('/posts', getPosts);

// Get a specific post by ID
router.get('/posts/:id', getPost);

// Add a new post
router.post('/posts', authenticateUser, addPost);

// Delete a post by ID
router.delete('/posts/:id', authenticateUser, deletePost);

// Update a post by ID
router.put('/posts/:id', authenticateUser, updatePost);

// Middleware to authenticate user using JWT
function authenticateUser(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, process.env.JWT_SECRET || 'your_default_secret', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');
    
    req.userInfo = userInfo;
    next();
  });
}

// Controller function to get all posts
function getPosts(req, res) {
  const q = req.query.cat ? 'SELECT * FROM posts WHERE cat=?' : 'SELECT * FROM posts';
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
}

// Controller function to get a specific post by ID
function getPost(req, res) {
  const q =
    'SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
}

// Controller function to add a new post
function addPost(req, res) {
  const q =
    'INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)';

  const values = [
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.cat,
    req.body.date,
    req.userInfo.id,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json('Post has been created.');
  });
}

// Controller function to delete a post by ID
function deletePost(req, res) {
  const postId = req.params.id;
  const q = 'DELETE FROM posts WHERE `id` = ? AND `uid` = ?';

  db.query(q, [postId, req.userInfo.id], (err, data) => {
    if (err) return res.status(403).json('You can delete only your post!');

    return res.json('Post has been deleted!');
  });
}

// Controller function to update a post by ID
function updatePost(req, res) {
  const postId = req.params.id;
  const q =
    'UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?';

  const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

  db.query(q, [...values, postId, req.userInfo.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json('Post has been updated.');
  });
}

export default router;
