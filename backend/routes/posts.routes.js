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
router.post('/blog/', authenticateToken, createPost);
router.get('/blog/', authenticateToken, getAllPosts);
router.get('/blog/:id', authenticateToken, getPostById);
router.put('/blog/:id', authenticateToken, updatePost);
router.delete('/blog/:id', authenticateToken, deletePost);

export default router;
