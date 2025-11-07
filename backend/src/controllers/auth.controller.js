import express from 'express';
import * as authService from '../services/auth.service.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const token = authService.generateToken();
    res.json({ token });
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

export default router;
