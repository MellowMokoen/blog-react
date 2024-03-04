import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  authenticateUser,
} from '../controllers/users.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', authenticateUser, getUserProfile);

export default router;
