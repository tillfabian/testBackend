const express = require('express');
const router = express.Router();
const PostController = require('../controllers/posts');

//raiz index
router.get('/', PostController.getPosts);

//posts por id categoria
router.get('/post-categoria/:idcategoria', PostController.getPostscategoria);

//create
router.post('/add-post', PostController.addPost);

//read /api/posts/:id
router.get('/:id', PostController.getPost);

//update
router.patch('/update-post/:id', PostController.updatePost);

//delete
router.delete('/delete-post/:id', PostController.deletePost);

module.exports = router;