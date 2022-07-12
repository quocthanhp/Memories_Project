import express from 'express'
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js"; //in node must include js, in react not

const router = express.Router()

// add logic to controller
router.get('/', getPosts);
router.post('/', createPost);
//patch for update existing thing
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

    
    
export default router;