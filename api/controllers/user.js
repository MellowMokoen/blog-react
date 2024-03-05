import { validationResult } from 'express-validator';

// Controller function to get all users
export const getUsers = async (req, res) => {
  try {
    const users = await req.db.query('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get a specific user by ID
export const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await req.db.query('SELECT * FROM users WHERE id = ?', [userId]);

    if (!user || user.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// function to add a new user
export const addUser = async (req, res) => {
  // Validate input using express-validator or other validation libraries

  // Handle validation errors, if any
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    
    const result = await req.db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [
      username,
      email,
      password,
    ]);

    // Respond with success message or other relevant information
    res.status(201).json({ message: 'User added successfully', userId: result.insertId });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// function to delete a user by ID
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
   
    await req.db.query('DELETE FROM users WHERE id = ?', [userId]);

    // Respond with success message or other relevant information
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to update a user by ID
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;

  try {
 
    await req.db.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [
      username,
      email,
      password,
      userId,
    ]);

    // Respond with success message or other relevant information
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
