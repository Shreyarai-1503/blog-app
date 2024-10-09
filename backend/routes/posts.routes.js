import express from 'express';
import { authenticateToken } from '../middlewares/authToken.js';
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
} from '../controllers/post.controller.js';

const router = express.Router();

// All routes are protected and handle file upload
router.post('/', authenticateToken, createPost);
router.get('/', authenticateToken, getAllPosts);
router.get('/:id', authenticateToken, getPostById);
router.put('/:id', authenticateToken, updatePost);
router.delete('/:id', authenticateToken, deletePost);

export default router;
