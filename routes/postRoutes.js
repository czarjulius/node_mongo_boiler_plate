import express from 'express';
import PostController from '../controllers/postController'

const router = express.Router()

router.get('/', PostController.getAll);
router.get('/:id', PostController.getById);
router.patch('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
router.post('/', PostController.AddPost);

module.exports = router;