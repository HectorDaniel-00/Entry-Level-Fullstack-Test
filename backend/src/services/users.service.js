import db from '../models/index.js';

const { User } = db;

export const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error('Error fetching users from database:', error);
    throw error;
  }
};
