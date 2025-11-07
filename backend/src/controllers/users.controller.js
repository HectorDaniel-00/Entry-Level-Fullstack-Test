import express from 'express';
import * as usersService from '../services/users.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
